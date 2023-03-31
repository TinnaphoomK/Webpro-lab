# WEEK10-EXERCISE
File upload and DB transaction

## Tutorial - File Upload and DB Transaction

#### 1. Multer ใช้สำรับ Upload รูปภาพ

#### วิธีทำ

0. ติดตั้ง multer
```
> npm install multer
```

1. สร้าง Instance สำหรับเรียกใช้ dependencies Multer
```javascript
const multer = require('multer')
```

2. กำหนด config สำหรับ multer
```javascript
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './static/uploads') // path to save file
  },
  filename: function (req, file, callback) {
    // set file name
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
```

3. กำหนดตัวแปรสำหรับเรียกใช้งาน
```javascript
const upload = multer({ storage: storage })
```

##### Final code Multer
```javascript
// Require multer for file upload
const multer = require('multer')
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './static/uploads')
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage })
```

___

#### 2. Create Blog

1. สร้าง Router ```/blogs``` ใหม่ในไฟล์ ```/routes/blog.js```

```javascript
router.post('/blogs', async function (req, res, next) {
    // create code here
}
```

2. แทรก `upload.single('myimage')` ไว้ระหว่าง path กับ callback ของ router โดยตั้งชื่อ key ว่า `'myimage'`จะได้โค้ดตามนี้
```javascript
//                    >> insert code here <<
router.post('/blogs', upload.single('myImage'), async function (req, res, next) {
    // create code here
}
```

3. สร้างตัวแปรสำหรับเก็บข้อมูลของ file ที่อาจจะอัปโหลดแนบมาด้วย
```javascript
const file = req.file;
```

4. เช็กว่ามีไฟล์แนบมากับ Request หรือไม่ ถ้าไม่มีรูปให้แสดง Error สถานะ 400 ออกไป
```javascript
if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
}
```
5. สร้างตัวแปรมารับค่าจาก request
```javascript
const title = req.body.title;
const content = req.body.content;
const status = req.body.status;
const pinned = req.body.pinned;
```
6. สร้าง transaction ขึ้นมา

```javascript
const conn = await pool.getConnection()
await conn.beginTransaction();
```

7. สร้าง try catch
8. ใน try เพิ่มข้อมูลตาราง blogs และประกาศตัวแปร results มารับค่า
```javascript
let results = await conn.query(
        "INSERT INTO blogs(title, content, status, pinned, `like`,create_date) VALUES(?, ?, ?, ?, 0,CURRENT_TIMESTAMP);",
        [title, content, status, pinned]
      )
```
9. เอาค่า id ของ blog จาก results
```javascript
const blogId = results[0].insertId;
```
10. เพิ่มข้อมูลในตารางรูปโดยระบุ blog_id (ใช้บอกว่ารูปนี้เป็นของ blog ไหน)

*file.path.substr(6) - เพื่อตัดคำว่า static ออกจาก path เพื่อเหมาะสำหรับการทำไปแสดงผล*
```javascript
await conn.query("INSERT INTO images(blog_id, file_path) VALUES(?, ?);",[blogId, file.path.substr(6)])
```

11. Commit Transaction
```javascript
conn.commit()
```

12. Response
```javascript
res.send("success!");
```

13. หากการ Create เกิด Error ขึ้นมาขั้นตอนใดขั้นตอนหนึ่ง ให้ทำการ Rollback Transaction และ Return error ออกมา
```javascript
await conn.rollback();
return next(error)
```

##### Final code in create
```javascript

// Require multer for file upload
const multer = require('multer')
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './static/uploads')
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage })

// POST - create new blog with single upload file
router.post('/blogs', upload.single('myImage'), async function (req, res, next) {
    const file = req.file;
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }

    const title = req.body.title;
    const content = req.body.content;
    const status = req.body.status;
    const pinned = req.body.pinned;

    const conn = await pool.getConnection()
    // Begin transaction
    await conn.beginTransaction();

    try {
      let results = await conn.query(
        "INSERT INTO blogs(title, content, status, pinned, `like`,create_date) VALUES(?, ?, ?, ?, 0,CURRENT_TIMESTAMP);",
        [title, content, status, pinned]
      )
      const blogId = results[0].insertId;

      await conn.query(
        "INSERT INTO images(blog_id, file_path) VALUES(?, ?);",
        [blogId, file.path.substr(6)])

      await conn.commit()
      res.send("success!");
    } catch (err) {
      await conn.rollback();
      next(err);
    } finally {
      console.log('finally')
      conn.release();
    }
});
```

14. ทดสอบยิง API โดยใช้ `Postman`

___

#### 3. Update Blog

#### วิธีทำ
1. สร้าง Router ```/blogs/:id``` ใหม่ในไฟล์ ```/routes/blog.js```

```javascript
router.put('/blogs/:id', upload.single('myImage'), (req, res, next) => {
  // update blog code here
}
```

2. สร้าง transaction ขึ้นมา

```javascript
const conn = await pool.getConnection()
await conn.beginTransaction();
```

3. สร้าง try catch
4. ใน try ให้สร้างตัวแปรสำหรับเก็บข้อมูลของ file ที่อาจจะอัปโหลดแนบมาด้วย
```javascript
const file = req.file;
```
5. ในกรณีที่มีไฟล์รูปภาพอัปโหลดขึ้นมาด้วย แสดงว่าจะต้องอัปเดทรูปภาพด้วย โดยให้สร้าง if มาดักไว้ และทำการ Update Path ของรูปที่อยู่ในตาราง images
```javascript
if (file) {
    await conn.query("UPDATE images SET file_path=? WHERE id=?",[file.path, req.params.id])
}
```

6. ต่อมาก็ทำการอัปเดทข้อมูลอื่นในตาราง blogs
```javascript
await conn.query('UPDATE blogs SET title=?,content=?, pinned=?, blogs.like=?, create_by_id=? WHERE id=?', [req.body.title, req.body.content, req.body.pinned, req.body.like, null, req.params.id])
```

7. Commit Transaction
```javascript
conn.commit()
```

8. ถ้า Update สำเร็จให้ Response ออกมา
```javascript
res.json({ message: "Update Blog id " + req.params.id + " Complete" })
```

9. หากการ Update เกิด Error ขึ้นมาขั้นตอนใดขั้นตอนหนึ่ง ให้ทำการ Rollback Transaction และ Return error ออกมา
```javascript
await conn.rollback();
return next(error)
```

##### Final code in Update

```javascript
router.put('/blogs/:id', upload.single('myImage'), async (req, res, next) => {

  const conn = await pool.getConnection()
  await conn.beginTransaction();

  try {
    const file = req.file;

    if (file) {
      await conn.query(
        "UPDATE images SET file_path=? WHERE id=?",
        [file.path, req.params.id])
    }

    await conn.query('UPDATE blogs SET title=?,content=?, pinned=?, blogs.like=?, create_by_id=? WHERE id=?', [req.body.title, req.body.content, req.body.pinned, req.body.like, null, req.params.id])
    conn.commit()
    res.json({ message: "Update Blog id " + req.params.id + " Complete" })
  } catch (error) {
    await conn.rollback();
    return next(error)
  } finally {
    console.log('finally')
    conn.release();
  }
});
```

10. ทดสอบยิง API โดยใช้ `Postman`

----

#### 4. Delete

**เงื่อนไข**: ในการจะลบแต่ละ Blog จะต้องทำการเช็กว่า Blog นั้นมี comment หรือไม่ **หากมี comment** อยู่จะต้องแสดง message ว่า *"Can't Delete. This Blog has a comment"* แต่ถ้า Blog นั้น **ไม่มี Comment** ก็จะลบข้อมูลออกจากตาราง blogs และ**ลบข้อมูลรูปภาพออกจากตาราง images** ด้วย

1. สร้าง Router `/blog/:id` ใหม่ในไฟล์ `/routes/blog.js`

```javascript
router.delete('/blogs/:id', function (req, res) {
  // delete blog code here
});
```
2. สร้าง Transaction ขึ้นมา
```javascript
const conn = await pool.getConnection()
await conn.beginTransaction();
```
3. สร้าง try catch
4. ใน try ให้เลือก Comment ที่มี `blog_id` เท่ากับ `params` ที่รับเข้ามา และเก็บผลลัพท์อยู่ในตัวแปรที่ชื่อว่า `comments`
```javascript
let comments = await conn.query('SELECT * FROM comments WHERE blog_id=?', [req.params.id])
```
5. เช็กว่าถ้าเกิด `comments` ที่ได้ ถ้ามีมากกว่า 0 แสดงว่า blog นั้นมี comment อยู่ ให้ Response เป็นสถานะ 409 และมีข้อความว่า *"Can't Delete because this blog has comment!!!"*

```javascript
if (comments[0].length > 0) {
    res.status(409).json({ message: "Can't Delete because this blog has comment!!!" })
} else { 
    // continue delete ...
}
```
6. ถ้า post นั้นไม่มี comment ก็ให้ลบข้อมูลที่อยู่ในตาราง blogs และ images
```javascript
await conn.query('DELETE FROM blogs WHERE id=?;', [req.params.id]) // delete blog
await conn.query('DELETE FROM images WHERE blog_id=?;', [req.params.id]) // delete image
```

7. Commit Transaction
```javascript
conn.commit()
```

8. ถ้า Delete สำเร็จให้ Response ออกมา
```javascript
res.json({ message: 'Delete Blog id ' + req.params.id + ' complete' })
```

9. หากการ Delete เกิด Error ขึ้นมาขั้นตอนใดขั้นตอนหนึ่ง ให้ทำการ Rollback Transaction และ Return error ออกมา
```javascript
await conn.rollback();
return next(error)
```


##### Final code in Delete

```javascript
router.delete('/blogs/:id', async (req, res, next) => {

  const conn = await pool.getConnection()
  await conn.beginTransaction();

  try {
    // check blog has comment?
    let comments = await conn.query('SELECT * FROM comments WHERE blog_id=?', [req.params.id])

    if (comments[0].length > 0) {
      res.status(409).json({ message: "Can't Delete because this blog has comment!!!" })
    } else {
      await conn.query('DELETE FROM blogs WHERE id=?;', [req.params.id]) // delete blog
      await conn.query('DELETE FROM images WHERE blog_id=?;', [req.params.id]) // delete image
      await conn.commit()
      res.json({ message: 'Delete Blog id ' + req.params.id + ' complete' })
    }
  } catch (error) {
    await conn.rollback();
    next(error);
  } finally {
    console.log('finally')
    conn.release();
  }
});
```

10. ทดสอบยิง API โดยใช้ `Postman`

___

## Exercise WEEK 10

1. ปรับแก้ไข route GET `/blogs/:id/` ซึ่งดึงข้อมูลรายละเอียดของ blog มาแสดง โดย ณ ตอนนี้ยังไม่มีการดึงข้อมูลรูปภาพของ blog จากตาราง `images` มาแสดง

```javascript
router.get("/blogs/:id", function (req, res, next) {
  const promise1 = pool.query("SELECT * FROM blogs WHERE id=?", [
    req.params.id,
  ]);
  const promise2 = pool.query("SELECT * FROM comments WHERE blog_id=?", [
    req.params.id,
  ]);

  Promise.all([promise1, promise2])
    .then((results) => {
      const blogs = results[0];
      const comments = results[1];
      res.render("blogs/detail", {
        blog: blogs[0][0],
        comments: comments[0],
        error: null,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
```

2. ต่อเนื่องจากข้อ 1 ปรับแก้ไขหน้า detail.ejs ให้นำรูปภาพจากตาราง `images` มาแสดง

![Screen Shot 2565-03-28 at 06 40 47](https://user-images.githubusercontent.com/77012730/160306678-d2c357cc-12d0-474e-985f-2a8083f6b253.png)


3. สร้าง form สำหรับ create new comment โดยใช้ ejs โดย form จะต้องสามารถอัพโหลดไฟล์รูปภาพได้ (ไฟล์ detail.ejs line 90 - 99)

```ejs
  <form method="POST" action="..." enctype="...">
      <div class="field">
          <label class="label">Add Comment</label>
          <div class="control">
            <textarea class="textarea" name="comment" placeholder="Add Comment Here"></textarea>
          </div>
        </div>
        <input name="myImage" type="file">
      <input class="button is-primary" type="submit" value="Submit">
  </form>
```
*อย่าลืม `enctype="multipart/form-data"`*

4. แก้ไข code ของ route สำหรับ create new comment ที่ทำใน WEEK09 ให้รับไฟล์ image ที่ถูกอัพโหลดและเก็บไฟล์ไว้ในโฟลเดอร์ static/uploads จากนั้นทำการบันทึกข้อมูลลงในตาราง `comments` และ ตาราง `images` - จะต้องสามารถ upload ไฟล์จาก form ในข้อ 3 ได้
5. ลองปรับปรุงโจทย์ในข้อ 4 โดยใช้ database transactions เพราะมีการ insert 2 ตาราง
6. แก้ไข detail.ejs ในส่วนที่แสดงผล comment โดยให้แสดงรูปภาพของ comment ด้วย (detail.ejs line 62 - 89)

![Screen Shot 2565-03-28 at 06 52 37](https://user-images.githubusercontent.com/77012730/160306688-583b08c9-fcf6-4b77-adba-6319c3caf66d.png)

**หมายเหตุ 1: ให้ทุกคนทำการ generate ตัว database schema webpro ขึ้นมาใหม่ โดยใช้ file 256503-webpro.sql ที่ให้มา (ผมมีการเพิ่ม column `comment_id` ในตาราง `images` ที่เป็น FK ไปหาตาราง `comments`)**

**หมายเหตุ 2: ให้ทุกคนนำ file comment.js ที่ได้ทำไปใน week9-Exercise มาประยุกต์ใช้ต่อในสัปดาห์นี้**

**หมายเหตุ 3: การทำงานในส่วน frontend ของ Lab นี้ ให้ทำในรูปแบบของ ejs + Vue.js หรือจะใช้ ejs อย่างเดียวก็ได้**
