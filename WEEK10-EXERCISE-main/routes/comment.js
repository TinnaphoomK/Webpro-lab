const express = require("express");
const path = require("path")
const pool = require("../config")

const router = express.Router();

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

// Get comment
router.get('/:blogId/comments', function(req, res, next){
});
// Create comment
router.post('/:blogId/comments', upload.single('comment_image'), async function (req, res, next) {
  const comment = req.body
  const blog_id = req.params.blogId

  try {
      console.log(blog_id)
      const file = req.file;

      const [rows, fields] = await pool.query(
          'INSERT INTO comments(comment, blog_id) VALUES (?, ?)',
          [comment.comment, blog_id]
      )
      console.log("save comment");


        
      if(file){
        const [rows2, fields2] = await pool.query('INSERT INTO images(`blog_id`, comment_id, file_path, upload_date) VALUES(?, ?, ?, CURRENT_TIMESTAMP);',
            [blog_id, rows.insertId, file.path.substr(6)]
        )
        console.log("save file");
      }
    res.send("success!");

  } catch (err) {
      console.log(err)
      return next(err);
  }
});

// Update comment
router.put('/comments/:commentId', function(req, res, next){
    return
});

// Delete comment
router.delete('/comments/:commentId', function(req, res, next){
    return
});

// Delete comment
router.put('/comments/addlike/:commentId', function(req, res, next){
    return
});


exports.router = router