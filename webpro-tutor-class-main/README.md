# Web Programming Quiz

### ข้อควรระวัง !

1. <span style="color:red">ห้ามเปลี่ยนชื่อทุกโฟลเดอร์</span>
2. <span style="color:red">ไม่ควรแก้ไขไฟล์ภายในโฟลเดอร์ `_test_`</span>
3. <span style="color:red">ห้ามแก้ไขไฟล์ `server.js`</span>
4. <span style="color:red">ไฟล์ `database.js` ในโฟลเดอร์ `config` สามารถแก้ไขได้ _แต่ห้ามเปลี่ยนชื่อไฟล์ หรือนำไฟล์ออกจากโฟลเดอร์_</span>
5. <span style="color:red">ให้ zip ไฟล์ภายในโฟลเดอร์ `todo`</span>
6. <span style="color:red">ให้ทำการ `zip` โปรเจคก่อน upload เท่านั้น _ห้ามใช้ วิธีอื่นเช่น RAR, RAR4_ </span>
7. <span style="color:red">ระบบสามารถ upload ได้แค่ `.zip` ไฟล์</span>
8. <span style="color:red">ห้าม zip โปรเจคที่ยังมี `node_modules` เพราะจะไม่สามารถ upload ไฟล์ได้</span>

## 0. ตรวจสอบ express.js

```
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
```


## 1. To Do app

จงแก้ไข API ของเว็บไซต์สำหรับจัดการ ToDo List

### ขั้นตอนการ setup โปรเจค

1. ดาวน์โหลดไฟล์ของโปรเจคที่แนบมาให้ และแตกไฟล์ออกมา
2. เข้าไปในโฟลเดอร์ `quiz-2-65-main`
3. สร้าง database ชื่อ `todo`
4. ทำการรัน sql script `todo.sql` ที่ให้มา
5. เข้าไปในโฟลเดอร์ `quiz-2-65-main\todo\config`
6. แก้ไขไฟล์ `database.js`ให้มีค่าตรงกับ database ในเครื่อง
7. ใช้คำสั่งด้านล่าง เพื่อติดตั้ง dependencies ที่เกี่ยวข้อง

```
> npm install
```

8. ใช้คำสั่งด้านล่าง เพื่อ start web server

```
> npm run serve
```

<br/>
### ตาราง todo

| Column Name | Data Type |
| ----------- | :-------: |
| id (PK)     |    INT    |
| title       |  VARCHAR  |
| description |   TEXT    |
| due_date    |   DATE    |
| order       |    INT    |

### โจทย์คำสั่ง

#### 1. จงแก้ไข route `POST: http://localhost:3000/todo/` ที่ใช้ในการสร้างรายการ ToDo ในตาราง `todo` _(1 คะแนน)_

- `title` และ `description` เป็น **required field** 
- ในกรณี่ที่ไม่ส่ง `due_date` จะบันทึก `due_date` เป็นวันปัจจุบัน
- เลข `order` จะเพิ่มขึ้นไปเรื่อยๆ โดยคำนวณจาก MAX(`order`) + 1

- ข้อมูลที่แนบมากับ body ของ request จะมีลักษณะดังนี้

- คำสั่งในการ Query Date ให้เป็น ( yyyy-mm-dd )

```
 SELECT *, DATE_FORMAT(due_date, '%Y-%m-%d') AS due_date  FROM todo
```

**REQUEST**

```javascript
{
  "title": "อ่านหนังสือสอบ Web Pro",
  "description": "อ่านเกี่ยวกับ JS และ Vue JS",
  "due_date": "2023-05-01"
}
```

**RESPONSE**

- ในกรณีที่สร้าง ToDo สำเร็จจะ return `response (status = 201 SUCCESS)` ดังนี้

```javascript
{
  "message": "สร้าง ToDo 'อ่านหนังสือสอบ Web Pro' สำเร็จ",
  "todo": {
    "id": 1
    "title": "อ่านหนังสือสอบ Web Pro",
    "description": "อ่านเกี่ยวกับ JS และ Vue JS",
    "due_date": "2023-05-01",
    "order": 1
  }
}
```

- ในกรณีที่ไม่กรอกข้อมูล title จะ return `response (status = 400 BAD REQUEST)` ดังนี้

```javascript
{
  "message": "ต้องกรอก title"
}
```

#### 2. จงแก้ไข route `DELETE: http://localhost:3000/todo/:id/` ที่ใช้ในการลบข้อมูลในตาราง `todo` _(1 คะแนน)_

**RESPONSE**

- ในกรณีที่ลบ ToDo สำเร็จจะ return `response (status = 200 SUCCESS)`ดังนี้

```javascript
{
  "message": "ลบ ToDo 'อ่านหนังสือสอบ Web Pro' สำเร็จ",
}
```

- ในกรณีที่ลบ ToDo ไม่สำเร็จ โดยส่ง `:id` ที่ไม่มีในตาราง `todo` จะ return `response (status = 404 Not Found)` ดังนี้

```javascript
{
  "message": "ไม่พบ ToDo ที่ต้องการลบ"
}
```

#### 3. จงแก้ไข route `GET: http://localhost:3000/todo/` ที่ใช้ในการดึงข้อมูลจากตาราง `todo` ซึ่งรับตัวแปร query string 2 ตัวได้แก่ `start_date` และ `end_date` _(1 คะแนน)_

**REQUEST**

- `GET: http://localhost:3000/todo/?start_date=2023-01-01&end_date=2023-05-15`
- จะเป็นการค้นหาข้อมูล ToDo ทั้งหมดซึ่งมี `due_date` อยู่ตั้งแต่วันที่ 2023-01-01 ถึงวันที่ 2023-05-15 `(YYYY-MM-DD)`

**RESPONSE**

- ในกรณีที่ค้นหาข้อมูลสำเร็จ ToDo สำเร็จจะ return `response (status = 200 SUCCESS)` ดังนี้

```javascript
[
  {
    id: 1,
    title: "ไปซื้อของ",
    description: "ซื้อของกินที่ Paragon",
    due_date: "2023-01-01",
    order: 1,
  },
  {
    id: 2,
    title: "ไปกินข้าวกับแฟน",
    description: "ไปกินข้าวที่ร้านข้าวแกงข้างบ้าน",
    due_date: "2023-03-01",
    order: 2,
  },
  {
    id: 3,
    title: "สอบ final WEBPRO",
    description: "สู้ๆ",
    due_date: "2023-05-15",
    order: 3,
  },
];
```
