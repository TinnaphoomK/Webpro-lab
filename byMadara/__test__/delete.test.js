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


describe('delete todo', () => {
    it('should return status 404 when todo not found', async () => {
        const randomId = Math.random() * 1
        const response = await supertest(app)
            .delete(`/todo/${ randomId }`)

        expect(response.status).toBe(404)
        expect(response.body.message).toBe('ไม่พบ ToDo ที่ต้องการลบ')
    })        

    it('should return status 200 when delete todo success', async () => {
        const response = await supertest(app)
            .delete('/todo/2')
        
        const [todo] = await db.query('SELECT * FROM todo WHERE id = 2')

        expect(todo.length).toBe(0)
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('ลบ ToDo \'ไปกินข้าวกับแฟน\' สำเร็จ')
    })
});

