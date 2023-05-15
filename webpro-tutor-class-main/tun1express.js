const express = require('express');
const app = express();
const Joi = require('joi');
const pool = require('./config/database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** 
 *  เริ่มทำข้อสอบได้ที่ใต้ข้อความนี้เลยครับ
 * !!! ไม่ต้องใส่ app.listen() ในไฟล์นี้นะครับ มันจะไป listen ที่ไฟล์ server.js เองครับ !!!
 * !!! ห้ามลบ module.exports = app; ออกนะครับ  ไม่งั้นระบบตรวจไม่ได้ครับ !!!
*/
app.delete('/todo/:id', async (req, res) => {
    const query1 = req.params.id

    const [result] = await pool.query("SELECT * FROM todo WHERE id = ?", [query1])
    if (result.length === 0) {
        return res.status(404).send(
            {
                "message": "ไม่พบ ToDo ที่ต้องการลบ"
            }
        )
    }
    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        const [data] = await pool.query("DELETE FROM todo WHERE id = ?", [query1])
        await conn.commit()
        res.status(200).send(
            {
                "message": `ลบ ToDo '${result[0].title}' สำเร็จ`,
            }
        )
    }catch(error){
        conn.rollback()
        res.status(400)
    }finally{
        conn.release()
    }
})

const schema = Joi.object({
    start_date: Joi.date().required(),
    end_date: Joi.date().required().when('start_date', {
        is: Joi.date().required(),
        then: Joi.date().min(Joi.ref('start_date')).required()
    })
}) 
app.get('/todo', async (req, res) => {
    const query2 = req.query
    const ans = schema.validate(query2)


    if (!query2.start_date || !query2.end_date) {
        const [result4] = await pool.query(`SELECT *, DATE_FORMAT(due_date, '%Y-%m-%d') AS due_date FROM todo `, [])
        res.status(200).send(result4)

        
    // กรณีมี String query
    } else {
        const [result4] = await pool.query(`SELECT *, DATE_FORMAT(due_date, '%Y-%m-%d') AS due_date FROM todo WHERE due_date BETWEEN ? AND ?`, [query2.start_date, query2.end_date])
        res.status(200).send(result4)
    }
})

const schema2 = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    due_date: Joi.date()
})
app.post('/todo', async (req, res) => {
    const query3 = req.body
    const ans2 = schema2.validate(query3)
    if (ans2.error){
        if(ans2.error.details[0].path[0] == 'title'){
            return res.status(400).send({"message": "ต้องกรอก title"})
        }
        // description ไม่มี
        if(ans2.error.details[0].path[0] == 'description'){
            return res.status(400).send({"message": "ต้องกรอก description"})
        }
    }
    const conn3 = await pool.getConnection()
    await conn3.beginTransaction()

        const [order] = await pool.query('SELECT max(`order`) `orders` FROM todo')
        const [data3] = await pool.query('INSERT INTO todo(title, description, due_date, `order`) VALUES (?, ?, ?, ?)', [query3.title, query3.description, query3.due_date ? query3.due_date : new Date(), order[0].orders + 1])
        const [total] = await pool.query("SELECT *, DATE_FORMAT(due_date, '%Y-%m-%d') AS due_date FROM todo WHERE id = ?", [data3.insertId])
        res.status(201).send({
            "message": `สร้าง ToDo '${query3.title}' สำเร็จ`,
            "todo": total[0]
        })
})
module.exports = app;