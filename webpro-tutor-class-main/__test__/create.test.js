const supertest = require('supertest');

let server;
const db = require('../config/database');
const app = require('../express');

beforeAll(async () => {

    server = app.listen(3001)

    await db.query('DROP TABLE IF EXISTS todo')

    await db.query(
        `CREATE TABLE IF NOT EXISTS todo (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        due_date DATE NOT NULL,
        \`order\` INT NOT NULL)`
    )

    await db.query(
        `INSERT INTO todo (id, title, description, due_date, \`order\`) VALUES
            (1, 'ไปซื้อของ', 'ซื้อของกินที่ Paragon', '2023-01-01', 1),
            (2, 'ไปกินข้าวกับแฟน', 'ไปกินข้าวที่ร้านข้าวแกงข้างบ้าน', '2023-03-01', 2),
            (3, 'สอบ final WEBPRO', 'สู้ๆ', '2023-05-15', 3);
        `
    )

});

afterAll(async () => {
    await db.query('DROP TABLE IF EXISTS todo')
    await db.end()
    await server.close()
});


describe('Create todo', () => {
    it.concurrent('should return status 400 when description is empty', async () => {
        const request = {
            title: 'อ่านหนังสือสอบ',
            description: '',
            due_date: '2023-05-01',
        }

        const response = await supertest(app)
            .post('/todo')
            .send(request)

        expect(response.status).toBe(400)
        expect(response.body.message).toBe('ต้องกรอก description')
    })

    it('should return status 400 when title is empty', async () => {
        const request = {
            title: '',
            description: 'อ่านเกี่ยวกับ JS และ Vue JS',
            due_date: '2023-05-01',
        }

        const response = await supertest(app)
            .post('/todo')
            .send(request)

        expect(response.status).toBe(400)
        expect(response.body.message).toBe('ต้องกรอก title')
    })

    it('should create todo correctly and send status 201', async () => {
        const request = {
            title: 'อ่านหนังสือสอบ Web Pro',
            description: 'อ่านเกี่ยวกับ JS และ Vue JS',
            due_date: '2023-05-01',
        }

        const response = await supertest(app)
            .post('/todo')
            .send(request)
        
        const [rows, fields] = await db.query(`
            SELECT *, DATE_FORMAT(due_date, '%Y-%m-%d') AS due_date 
            FROM todo
            WHERE id = (SELECT LAST_INSERT_ID())
        `)
        
        expect(response.status).toBe(201)
        expect(response.body.message).toBe(`สร้าง ToDo '${ request.title }' สำเร็จ`)
        expect(response.body.todo).toMatchObject(rows[0])
    })
});

