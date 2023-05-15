const express = require('express');
const { required } = require('joi');
const app = express();
const Joi = require('joi');
const { query } = require('./config/database');

const pool = require('./config/database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// schema check joi
const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    due_date: Joi.date()
})

// ข้อที่ 1
app.post('/todo', async (req,res) =>{
    const qry = req.body

    // เช็ค joi
    const result = schema.validate(qry)

    if(result.error){
        // title ไม่มี
        if(result.error.details[0].path[0] == 'title'){
            return res.status(400).send({"message": "ต้องกรอก title"})
        }
        // description ไม่มี
        if(result.error.details[0].path[0] == 'description'){
            return res.status(400).send({"message": "ต้องกรอก description"})
        }
    }

    // หาค่า order มาที่สุด
    const [order] = await pool.query('select max(`order`) `order` from todo')

    // เพิ่มข้อมูล
    const [data1] = await pool.query('INSERT INTO todo(title, description, due_date, `order`) VALUES (?,?,?,?)', [qry.title, qry.description, qry.due_date ? qry.due_date : new Date(), order[0].order+1])

    // เอาค่ามาแสดง โดยใช้้ข้อมูลที่ return มาจาก data1 --> return id ที่ insert ออกมา
    const [ans] = await pool.query("SELECT * ,DATE_FORMAT(due_date, '%Y-%m-%d') AS due_date  FROM todo where id = ?", [data1.insertId])

    // ส่งค่าและ status 201
    res.status(201).send({
        "message": `สร้าง ToDo '${qry.title}' สำเร็จ`,
        "todo": ans[0]
    })
})

// ข้อ 2
app.delete('/todo/:id', async (req,res,next) =>{

    const id = req.params.id

    // ดึงข้อมูลเพื่อมาแสดง
    const [data2] = await pool.query('select * from todo where id = ?',[id])

    // สร้าง transaction  ==> คือการที่เราไปกระทำกับ database เช่น เพิ่ม ลบ แก้ไข ซึ่งต้องทำพร้อมกันหลายๆตัว
    // ถ้า qry แค่ record เดียวไม่จำเป็นต้องใช้ transaction 
    const conn = await pool.getConnection()
    await conn.beginTransaction()

    // มี transaction แล้วต้องมี try catch ทุกครั้ง
    try{
        // คำสั่งลบข้อมูล
        const [del] = await pool.query('delete from todo where id = ?',[id])

        // เหมือน git เสดแล้วก็ commit 
        await conn.commit()

        // ส่งค่าไป status 200
        res.status(200).send({
            "message": `ลบ ToDo '${data2[0].title}' สำเร็จ`,
          })

    // กรณี error
    } catch(error){
        
        // กรณีลบซ้ำ
        res.status(404).send(
            {
                "message": "ไม่พบ ToDo ที่ต้องการลบ"
            }
        )

        // ถ้าข้อผิดพลาดมันจะไม่ทำงานทั้งหมดเลย
        conn.rollback()
    }finally{

        // จบ transaction
        conn.release()
    }

})


// schema check joi ตัวที่สอง
const schema2 = Joi.object({
    // เช็ค start_date ว่าเป็น วันที่ไหม และมีการ required ไหม
    start_date: Joi.date().required(),
    // เช็ค end_date ว่าเป็น วันที่ไหม และมีการ required ไหม และ มีค่ามากกว่า start_date ไหม
    end_date: Joi.date().required().when('start_date',{
    // start_date มีค่าเป็นวันที่ และ required ไหม
    is: Joi.date().required(),
    // ให้ start_date มีค่าน้อยกว่า end_date และ required
    then: Joi.date().min(Joi.ref('start_date')).required()
})
});

app.get('/todo', async (req,res) =>{
    // String query
    const qry = req.query
    // validate โดยใช้ schema2
    const result = schema2.validate(qry)
    // query


    // กรณีไม่มี String query
    if (!qry.start_date || !qry.end_date) {
        const [data3] = await pool.query(`SELECT *, DATE_FORMAT(due_date, '%Y-%m-%d') AS due_date FROM todo `, [])
        res.status(200).send(data3)

        
    // กรณีมี String query
    } else {
        const [data3] = await pool.query(`SELECT *, DATE_FORMAT(due_date, '%Y-%m-%d') AS due_date FROM todo WHERE due_date BETWEEN ? AND ?`, [qry.start_date, qry.end_date])
        res.status(200).send(data3)
    }
})

/** 
 *  เริ่มทำข้อสอบได้ที่ใต้ข้อความนี้เลยครับ
 * !!! ไม่ต้องใส่ app.listen() ในไฟล์นี้นะครับ มันจะไป listen ที่ไฟล์ server.js เองครับ !!!
 * !!! ห้ามลบ module.exports = app; ออกนะครับ  ไม่งั้นระบบตรวจไม่ได้ครับ !!!
*/

module.exports = app;


// JOI 
// string(): ใช้ในการตรวจสอบข้อมูลที่เป็นสตริง (string) โดยกำหนดเงื่อนไขต่าง ๆ เช่นความยาวของสตริงหรือรูปแบบ (pattern) ที่ต้องการ

// number(): ใช้ในการตรวจสอบข้อมูลที่เป็นตัวเลข (number) โดยกำหนดเงื่อนไขต่าง ๆ เช่นค่าต่ำสุด (minimum) หรือค่าสูงสุด (maximum) ที่ต้องการ

// boolean(): ใช้ในการตรวจสอบข้อมูลที่เป็นบูลีน (boolean) ซึ่งต้องเป็น true หรือ false

// object(): ใช้ในการตรวจสอบข้อมูลที่เป็นออบเจกต์ (object) โดยกำหนดเงื่อนไขต่าง ๆ เช่นการตรวจสอบค่าในคีย์ของออบเจกต์ หรือจำนวนคีย์ที่ต้องมี

// array(): ใช้ในการตรวจสอบข้อมูลที่เป็นอาเรย์ (array) โดยกำหนดเงื่อนไขต่าง ๆ เช่นขนาดอาเรย์ (length) หรือประเภทของข้อมูลภายในอาเรย์

// date(): ใช้ในการตรวจสอบข้อมูลที่เป็นวันที่ (date) โดยกำหนดเงื่อนไขต่าง ๆ เช่นรูปแบบวันที่ (format) หรือค่า

// required(): ใช้ในการกำหนดว่าข้อมูลต้องไม่เป็นค่าว่างหรือ null และต้องมีค่าที่ถูกต้อง

// min(), max(): ใช้ในการกำหนดค่าต่ำสุดและค่าสูงสุดของข้อมูล เช่น min(18) จะตรวจสอบว่าต้องมีค่าไม่น้อยกว่า 18

// email(): ใช้ในการตรวจสอบว่าสตริงที่กำลังตรวจสอบเป็นอีเมลที่ถูกต้องหรือไม่

// pattern(): ใช้ในการตรวจสอบว่าสตริงตรงตามรูปแบบที่กำหนด

// allow(): ใช้ในการระบุค่าที่ยอมรับให้ถูกต้อง เช่น allow('male', 'female') จะตรวจสอบว่าค่าต้องเป็น "male" หรือ "female" เท่านั้น

// forbidden(): ใช้ในการระบุว่าค่านั้นต้องไม่มีอยู่ โดยเฉพาะในกรณีที่ต้องการแบ่งกลุ่มคีย์ที่สามารถมีค่าหรือไม่มีค่าได้

// type email ต้องเป็น string ก่อน


// const schema = Joi.object({
//     email: Joi.string().email().required(),
//     password: Joi.string().required(),
//     confirmPassword: Joi.string()
//         .valid(Joi.ref('password'))
//         .required()
//         .error(new Error('Passwords do not match')),
//     role: Joi.string().required()
// });



// Joi.object(): ใช้สำหรับการสร้าง schema ของ object
// const schema = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).required(),
//   });


// Joi.array(): ใช้สำหรับการสร้าง schema ของ array
// const schema = Joi.array().items(Joi.string().valid('small', 'medium', 'large'));


// Joi.string(): ใช้สำหรับการตรวจสอบว่าข้อมูลเป็น string
// const schema = Joi.string();


// Joi.number(): ใช้สำหรับการตรวจสอบว่าข้อมูลเป็น number
// Joi.number(): ใช้สำหรับการตรวจสอบว่าข้อมูลเป็น number


// Joi.optional(): ใช้สำหรับการตรวจสอบว่าข้อมูลนั้นเป็น optional
// const schema = Joi.string().optional();


// Joi.validate(): ใช้สำหรับการตรวจสอบว่าข้อมูลที่รับมาเป็นรูปแบบที่ถูกต้องตาม schema
// const schema = Joi.string().required();
// const result = schema.validate('Hello');
// if (result.error) {
//   console.log(result.error.details);
// } else {
//   console.log(result.value);
// }


// Joi.alphanum()
//const schema = Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/);

// Joi.valid(): ใช้สำหรับการกำหนดค่าที่ถูกต้องสำหรับข้อมูล
// const schema = Joi.string().valid('small', 'medium', 'large');

// Joi.invalid(): ใช้สำหรับการกำหนดค่าที่ไม่ถูกต้องสำหรับข้อมูล
// const schema = Joi.string().invalid('small', 'medium', 'large');



// custom 
// const passwordValidator = (value, helpers) => {
//     if (value.length < 8) {
//         throw new Joi.ValidationError('Password must contain at least 8 characters')
//     }
//     if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
//         throw new Joi.ValidationError('Password must be harder')
//     }
//     return value
// }

// const signupSchema = Joi.object({
//     email: Joi.string().required().email(),
//     mobile: Joi.string().required().pattern(/0[0-9]{9}/),
//     first_name: Joi.string().required().max(150),
//     last_name: Joi.string().required().max(150),
//     password: Joi.string().required().custom(passwordValidator),
//     confirm_password: Joi.string().required().valid(Joi.ref('password')),
//     username: Joi.string().required().min(5).max(20).external(usernameValidator),
// })

