const express = require("express");
const path = require("path")
const pool = require("../config");

router = express.Router();

// For tutorial 1
router.post("/blogs/addlike/:blogId", async function (req, res, next) {
  // Your code here
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
    //Redirect ไปที่หน้า index เพื่อแสดงข้อมูล
    res.redirect('/');
  } catch (err) {
    return next(err);
  }
    
});

// For tutorial 2
router.get("/blogs/search", async function (req, res, next) {
  // Your code here
  try{
        // ค้นหาใน field title ของตาราง blogs โดยใช้ SELECT * FROM blogs WHERE title LIKE '%คำค้นหา%'
        const [rows, fields] = await pool.query("SELECT * FROM blogs WHERE title LIKE ?", [
          `%${req.query.search}%`,
        ]);
        // return json ของรายการ blogs
        return res.json(rows);
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
});

// For inserting new blog
// router.get("/create", async function (req, res, next) {
router.post("/create", async function (req, res, next) {
  // Your code here
  try{
    await pool.query("alter table blogs AUTO_INCREMENT = 1")
    const [rows, fields] = await pool.query("INSERT INTO blogs(title, content) values(?,?)", [
      "Title","hello"
    ]);
    // return json ของรายการ blogs
    // return res.redirect("/")
    return res.json("create success");

  } catch (err) {
    console.log(err)
    return next(err);
  }
});

// For blog detail page
router.get("/detail/:blogId", async function (req, res, next) {
  // Your code here
  try{
    const [rowsblo, fields1] = await pool.query("select * from blogs where id = ?", [
      req.params.blogId
    ]);
    const [rowscom, fields2] = await pool.query("select * from comments where blog_id = ?", [
      req.params.blogId
    ]);
    const [rowsimg, fields3] = await pool.query("select * from images where blog_id = ?", [
      req.params.blogId
    ]);
    // return json ของรายการ blogs
    res.render("blogs/detail", {blog:rowsblo, error:undefined, comments:rowscom, images:rowsimg})

  } catch (err) {
    res.render("blogs/detail", {error:err})
  }
});

// For updating blog
router.put("/update/:blogId", async function (req, res) {
  // Your code here]
  try{
    const [rows, fields] = await pool.query("update blogs set title = ?, content = ?, status = ? where id = ?;", [
      req.body.title, req.body.content, req.body.status, req.params.blogId
    ]);
    // return json ของรายการ blogs
    return res.json({id:req.params.blogId, content:req.body.content, status:req.body.status})

  } catch (err) {
    return next(err)
  }
});

// For deleting blog
router.delete("/delete/:id", async function (req, res) {
  // Your code here
  try{
    const [rows, fields] = await pool.query("delete from blogs where id = ?;", [
      req.params.id
    ]);
    // return json ของรายการ blogs
    return res.json({blog:"ID " +req.params.id + ' is deleted.'})

  } catch (err) {
    return next(err)
  }
});

exports.router = router;