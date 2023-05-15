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

describe('Get Todo', () => {
    it('should return 200 if found', async () => {
        const response = await supertest(app).get('/todo')
        const [todo] = await db.query('SELECT COUNT(id) as count FROM todo')
        const { count } = todo[0]
        expect(response.status).toBe(200)
        expect(response.body.length).toBe(count)
    })

    it('should return 200 if search by start_date=2023-01-01&end_date=2023-05-15', async () => {
        const response = await supertest(app)
            .get('/todo')
            .query({ start_date: '2023-01-01', end_date: '2023-05-15' })
        const [todo] = await db.query(`
            SELECT *, DATE_FORMAT(due_date, '%Y-%m-%d') AS due_date 
            FROM todo 
            WHERE due_date BETWEEN ? AND ?
        `, ['2023-01-01', '2023-05-15'])
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject(todo)
    })

    it('should return 200 + all todo if not have query', async () => {
        const response = await supertest(app).get('/todo')
        const [todo] = await db.query(`
            SELECT *, DATE_FORMAT(due_date, '%Y-%m-%d') AS due_date   
            FROM todo
        `)
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject(todo)
    })
})
