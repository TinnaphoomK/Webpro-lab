# WEEK09-TUTORIAL

เรามาลองทำโจทย์ 2 ข้อนี้กันดูนะครับ
เป็นตัวอย่างเพิ่มเติมจากใน Youtube Playlist: [Express + MySQL Part 1](https://youtube.com/playlist?list=PLBKsi1O7E5MwJUDp2-JmjidwkgRL20cty)

## Tutorial 1
สร้าง route สำหรับการเพิ่ม like โดยจะ**เพิ่มขึ้นทีละ 1** เมื่อถูกยิง request โดยจะส่ง `blogId` ของ blog ไปเพื่อบอกว่าจะเพิ่ม like ให้ blog ไหน
* **Method :** PUT
* **URL :**  /blogs/addlike/:blogId
* **Response :** 
```javascript
{
    blogId: 2,
    likeNum: 12 // 12 คือจำนวน like ของ blog ที่มี id = 2 หลังจาก +1 like แล้ว
}
```

> hint : ให้ไปดึงจำนวน like ปัจจุบันออกมาก่อน นำมา+1 แล้ว Update ค่าแทนค่าเดิม

### Step 1:
- เปิดไฟล์ routes/blog.js
- เราจะมาแก้ไข route ในส่วนนี้กัน

```javascript
router.post("/blogs/addlike/:blogId", async function (req, res, next) {
  // Your code here
});
```
### Step 2:
- เพิ่ม code สำหรับดึงข้อมูลจำนวน like และ update จำนวน like กลับเข้า DB

```javascript
router.post("/blogs/addlike/:blogId", async function (req, res, next) {
-  // Your code here
+  //ทำการ select ข้อมูล blog ที่มี id = req.params.blogId
+  try{
+    const [rows, fields] = await pool.query("SELECT * FROM blogs WHERE id=?", [
+      req.params.blogId,
+    ]);
+    //ข้อมูล blog ที่เลือกจะอยู่ในตัวแปร rows
+    console.log('Selected blogs =', rows)
+    //สร้างตัวแปรมาเก็บจำนวน like ณ ปัจจุบันของ blog ที่ select มา
+    let likeNum = rows[0].like
+   console.log('Like num =', likeNum) // console.log() จำนวน Like ออกมาดู
+    //เพิ่มจำนวน like ไปอีก 1 ครั้ง
+    likeNum += 1
+
+    //Update จำนวน Like กลับเข้าไปใน DB
+    const [rows2, fields2] = await pool.query("UPDATE blogs SET blogs.like=? WHERE blogs.id=?", [
+      likeNum, req.params.blogId,
+    ]);
+
+    // return json response
+    return res.json({
+      blogId: Number(req.params.blogId),
+      likeNum: likeNum
+    })
+  } catch (err) {
+    return next(err);
+  }
});
```
### Step 3:
- เรามาลองทำเพิ่มนิดหน่อยกัน ... ให้เมื่อกด ![image](https://user-images.githubusercontent.com/77012730/159155828-1b5f9a91-91a3-46da-9eab-6fd7c3a52b54.png) จากในหน้า `index.ejs` แล้วไปทำส่ง POST request ไปที่ route '/blogs/addlike/:blogId' เพื่อ update จำนวน like และนำจำนวน like ที่ได้รับ response มาแสดง
- เปิดไฟล์ views/index.ejs เพื่อแก้ไขให้ปุ่ม Like เมื่อกดจะทำการ post ไปที่ route '/blogs/addlike/:blogId'

```ejs
<footer class="card-footer">
    <a class="card-footer-item" href="<%= `/blogs/${blog.id}/` %>">Read more...</a>
    <a class="card-footer-item">
+     <form method="POST" action="<%= `/blogs/addlike/${blog.id}` %>" id="form<%= blog.id %>">
+       <span class="icon-text" onclick="document.getElementById('form<%= blog.id %>').submit();">
          <span class="icon">
            <i class="far fa-heart"></i>
          </span>
+         <span>Like (<%= blog.like %>)</span> <!-- ปรับเพิ่มให่้แสดงจำนวน like ในวงเล็บ -->
        </span>
+     </form>
    </a>
</footer>
```
- กลับไปที่ไฟล์ routes/blog.js แล้วไปแก้ไขในส่วนที่เราทำการ return response ปรับเป็นทำการ redirect ไปที่หน้า index แทน

```javascript
router.post("/blogs/addlike/:blogId", async function (req, res, next) {
  //ทำการ select ข้อมูล blog ที่มี id = req.params.blogId
  try{
    const [rows, fields] = await pool.query("SELECT * FROM blogs WHERE id=?", [
      req.params.blogId,
    ]);
    //ข้อมูล blog ที่เลือกจะอยู่ในตัวแปร rows
    console.log('Selected blogs =', rows)
    //สร้างตัวแปรมาเก็บจำนวน like ณ ปัจจุบันของ blog ที่ select มา
    let likeNum = rows[0].like
    console.log('Like num =', likeNum) // console.log() จำนวน Like ออกมาดู
    //เพิ่มจำนวน like ไปอีก 1 ครั้ง
    likeNum += 1

    //Update จำนวน Like กลับเข้าไปใน DB
    const [rows2, fields2] = await pool.query("UPDATE blogs SET blogs.like=? WHERE blogs.id=?", [
      likeNum, req.params.blogId,
    ]);
+    //Redirect ไปที่หน้า index เพื่อแสดงข้อมูล
+    res.redirect('/');
  } catch (err) {
    return next(err);
  }
});
```
____
## Tutorial 2
สร้าง route สำหรับการค้าหาชื่อ blog ที่มีอยู่ใน database โดยผลลัพท์จากการ search จะมีแค่ blog ที่มีคำที่ส่งมากับ req.query อยู่ใน `title` โดยในตัวอย่างจะเป็นการค้นหาด้วยคำว่า "web" จะสังเกตว่า blog ที่ออกมาทุกอันจะมีคำว่า web อยู่ใน `title` ด้วย

* **Method :** GET
* **URL :**  /blogs/search
* **Example :** blogs/search?search=web
* **Response :** 
```javascript
{
    "blog":[
        {
            "id": 4,
            "title": "Web Pro",
            "content": "Web Pro is easy",
            "status": "0",
            "pinned": 0,
            "like": 0,
            "create_date": "2021-03-14T17:00:00.000Z",
            "create_by_id": null
        },
        {
            "id": 8,
            "title": "webprograming",
            "content": "i like a webprograming",
            "status": "0",
            "pinned": 0,
            "like": 0,
            "create_date": "2021-03-14T17:00:00.000Z",
            "create_by_id": null
        },
        {
            "id": 10,
            "title": "Make Website from node js",
            "content": "Hey guy! Welcome back to webpro",
            "status": "0",
            "pinned": 0,
            "like": 0,
            "create_date": "2021-03-14T17:00:00.000Z",
            "create_by_id": null
        }
    ]
}
```
> hint : ตอนที่ Query SQL ให้ใช้ LIKE ดูการใช้ได้[ที่นี่](https://www.w3schools.com/sql/sql_like.asp)

### Step 1:
- เปิดไฟล์ routes/blog.js
- เราจะมาแก้ไข route ในส่วนนี้กัน

```javascript
router.post("/blogs/search", async function (req, res, next) {
  // Your code here
});
```
### Step 2:
- เพิ่ม code สำหรับค้นหา blog ตามคำค้นที่ส่งมากับ `req.query.search`
```javascript

router.get("/blogs/search", async function (req, res, next) {
-  // Your code here
+  try{
+    // ค้นหาใน field title ของตาราง blogs โดยใช้ SELECT * FROM blogs WHERE title LIKE '%คำค้นหา%'
+    const [rows, fields] = await pool.query("SELECT * FROM blogs WHERE title LIKE ?", [
+      `%${req.query.search}%`,
+    ]);
+    // return json ของรายการ blogs
+    return res.json(rows);
+
+  } catch (err) {
+    console.log(err)
+    return next(err);
+  }
});
```

### Step 3:
- เรามาลองทำเพิ่มนิดหน่อยกัน ... ไหนๆ ทำมาขนาดนี้ เราไปแก้ route '/' ในไฟล์ routes/index.ejs เพื่อให้สามารถค้นหา title ของ blog ได้ (แทนที่จะค้นหาด้วย route '/blogs/search' เราไปค้นหาใน route '/' เลย)
- เปิดไฟล์ routes/index.js และแก้ไข code ใน route '/' ดังนี้

```javascript
router.get("/", async function (req, res, next) {
  try {
-    const [rows, fields] = await pool.query(
-      `SELECT a.*, b.file_path FROM blogs AS a LEFT JOIN 
-      (SELECT * FROM images WHERE main=1) AS b ON a.id = b.blog_id;`
-    );
+    let query = `SELECT a.*, b.file_path FROM blogs AS a LEFT JOIN 
+    (SELECT * FROM images WHERE main=1) AS b ON a.id = b.blog_id`
+    let params = []
+    if (req.query.search){
+      query = query + ` WHERE a.title LIKE ?`
+      params = [`%${req.query.search}%`]
+    }
+    const [rows, fields] = await pool.query(query, params);
-    return res.render("index", { blogs: rows });
+    return res.render("index", { 
+      search: req.query.search || '', 
+      blogs: rows 
+    });
  } catch (err) {
    return next(err)
  }
});
```

### Step 4:
- เพิ่ม input box ในหน้า views/index.ejs พร้อมกับปุ่มค้นหา โดยเมื่อกดปุ่มให่ส่ง GET request ไปที่ route '/'
```ejs
<section class="section" id="app">
  <div class="content">
+   <form method="GET" action="/">
+   <div class="columns">
+     <div class="column is-4 is-offset-3">
+       <input class="input" type="text" name="search" placeholder="ค้นชื่อบทความ" value="<%= search %>">
+     </div>
+     <div class="column is-2">
+       <input class="button" type="submit" value="Search">
+     </div>
+   </div>
+   </form>
    <div class="columns is-multiline">
      <% for (let blog of blogs) { %>
        <div class="column is-3">
        ...
        </div>
      <% } %>
    </div>
</section>
```

___

# WEEK09-EXERCISE 

แบบฝึกหัดสัปดาห์ที่ 9 Express / MySql

### หมายเหตุ: ทุกข้อให้ทำเฉพาะ route ไม่ต้องทำไฟล์ .ejs - ใช้ Postman ทดสอบ
#### (แบบฝึกหัดสัปดาห์นี้เน้นการใช้งาน MySQL ไม่ต้องทำไฟล์ .ejs)

1. สร้าง Route สำหรับเพิ่มข้อมูล comment (`blogId` คือ id ของ Blog ที่ต้องการเพิ่ม Comment)
* **Method :** POST
* **URL :**  /:blogId/comments
* **Body**
```javascript
{
    "comment": "new comment",
    "like": 0,
    "comment_by_id": null
}
```
* **Response**

```javascript
{
    "message":"A new comment is added (ID: 1)" // แสดง ID ของ comment ที่เพิ่งถูก add
}
```

> hint : ใน sql สามารถใช้ CURRENT_TIMESTAMP เพื่อให้บันทึกเวลาปัจจุบันได้เลย
___
2. สร้าง Route สำหรับแก้ไขข้อมูลของ Comment โดย `commentId` คือ id ***ของ comment ที่ต้องการแก้ไข***
* **Method :** PUT
* **URL :**  /comments/:commentId
* **Body**
```javascript
{
    "comment": "edit comment",
    "like": 0,
    "comment_date": "2021-12-31",
    "comment_by_id": null,
    "blog_id": 1
}
```
* **Response**

```javascript
{
    "message": "Comment ID 1 is updated.",
    "comment": {
      "comment": "edit comment",
      "like": 0,
      "comment_date": "2021-12-31",
      "comment_by_id": null,
      "blog_id": 1
    } //ดึงข้อมูล comment ที่เพิ่งถูก update ออกมา และ return ใน response กลับไปด้วย
}
```
___
3. สร้าง Route สำหรับลบ comment โดย `commentId` คือ id ***ของ comment ที่ต้องการลบ***
* **Method :** DELETE
* **URL :**  /comments/:commentId
* **Response**
```javascript
{
    "message": "Comment ID 1 is deleted."
}
```

4. สร้าง Route สำหรับเพิ่มยอด like ให้กับ comment **เพิ่มขึ้นทีละ 1** เมื่อถูกยิง Request โดย `commentId` คือ id ***ของ comment ที่ต้องการเพิ่มยอดไลค์***
* **Method :** PUT
* **URL :**  /comments/addlike/:commentId
* **Response**
```javascript
{
    "blogId": 11
    "commentId": 20
    "likeNum": 5 //5 คือจำนวน like ของ comment ที่มี id = 20 หลังจาก +1 like แล้ว
}
```


