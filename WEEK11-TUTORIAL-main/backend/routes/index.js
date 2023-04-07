const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const [rows, fields] = await pool.query(
      `SELECT a.*, b.file_path FROM blogs AS a LEFT JOIN 
      (SELECT * FROM images WHERE main=1) AS b ON a.id = b.blog_id;`
    );
    return res.json(rows);
  } catch (err) {
    return next(err)
  }
});

exports.router = router;
