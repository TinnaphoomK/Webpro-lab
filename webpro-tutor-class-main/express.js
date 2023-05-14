const express = require("express");
const app = express();
const Joi = require("joi");
const pool = require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/todo", async (req, res, next) => {
	const schema = Joi.object({
		//define schema + validate
		title: Joi.string().required().messages({
			"string.empty": "ต้องกรอก title",
		}),
		description: Joi.string().required().messages({
			"string.empty": "ต้องกรอก description",
		}),
		due_date: Joi.date().iso(),
	});
	// const result = schema.validate(req.body);
	const { value, error } = schema.validate(req.body);
	// check error
	if (error) {
		return res.status(400).json({
			message: error.details[0].message,
		});
	}

	let connection = await pool.getConnection();
	await connection.beginTransaction();

	try {
		const { title, description, due_date } = value;
		// max order in list
		const [max] = await pool.query("SELECT MAX(`order`) AS maxorder FROM todo");
		const order = max[0].maxorder + 1;
		const now = new Date().toISOString().slice(0, 10); // format date to yyyy-mm-dd and create date now for default if not set due_date

		const [result] = await connection.query(
			"INSERT INTO todo (title, description, due_date, `order`) VALUES (?, ?, ?, ?)",
			[title, description, due_date || now, order]
		);

		await connection.commit();

		res.status(201).json({
			message: `สร้าง ToDo '${title}' สำเร็จ`,
			todo: {
				id: result.insertId,
				title,
				description,
				due_date: due_date
					? new Date(due_date).toISOString().slice(0, 10) // format date
					: now,
				order,
			},
		});
	} catch (error) {
		if (connection) {
			await connection.rollback();
		}
		next(error);
	} finally {
		connection.release();
	}
});

app.delete("/todo/:id", async (req, res, next) => {
	let connection = await pool.getConnection();
	await connection.beginTransaction();
	try {
		const { id } = req.params;
		const [[todo]] = await connection.query(
			"SELECT title FROM todo WHERE id = ?",
			[id]
		);
		const [result] = await connection.query("DELETE FROM todo WHERE id = ?", [
			id,
		]); // delete todo by id
		await connection.commit(); 
		// check result
		if (result.affectedRows === 0) {
			return res.status(404).json({
				message: "ไม่พบ ToDo ที่ต้องการลบ",
			});
		}
		res.status(200).json({
			message: `ลบ ToDo '${todo.title}' สำเร็จ`,
		});
	} catch (error) {
		if (connection) {
			await connection.rollback();
		}
		next(error);
	} finally {
		connection.release();
	}
});



app.get("/todo", async (req, res, next) => {
	let connection;
	try {
		const schema = Joi.object({
			start_date: Joi.date(),
			end_date: Joi.date().greater(Joi.ref("start_date")),
		}); // define schema + validate

		const { error } = schema.validate(req.query);
		if (error) {
			const err = new Error("Invalid query parameters");
			err.status = 400;
			throw err;
		} // check error from validate schema

		connection = await pool.getConnection();
		await connection.beginTransaction();

		const { start_date, end_date } = req.query; // get query params
		let query = "SELECT * FROM todo"; // set query 
		let queryParams = []; // set query params

		// check query params มีหรือไม่มีก็ได้
		if (start_date && end_date) {
			query += " WHERE due_date BETWEEN ? AND ?";
			queryParams = [start_date, end_date];
		} else if (start_date) {
			query += " WHERE due_date >= ?";
			queryParams = [start_date];
		} else if (end_date) {
			query += " WHERE due_date <= ?";
			queryParams = [end_date];
		}

		query += " ORDER BY `order` ASC"; // order by order ASC

		const [result] = await connection.query(query, queryParams); // query todo
		await connection.commit();

		const formattedTodos = result.map((todo) => {
			const dueDate = new Date(todo.due_date);
			dueDate.setDate(dueDate.getDate() + 1);
			return {
				...todo, // spread operator คือการ copy ค่าจาก object นึงไปใส่ใน object อีกตัว
				due_date: dueDate.toISOString().slice(0, 10),
			}; // format date
		});

		res.status(200).json(formattedTodos);
	} catch (error) {
		if (connection) {
			await connection.rollback();
		}
		next(error);
	} finally {
		if (connection) {
			connection.release();
		}
	}
});
module.exports = app;
