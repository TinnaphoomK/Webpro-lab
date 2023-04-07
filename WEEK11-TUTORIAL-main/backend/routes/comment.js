const express = require("express");
const pool = require("../config");
const path = require("path")
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

router.get('/:blogId/comments', function(req, res, next){
});


// Create new comment
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
          console.log(file.path)
          console.log("save file");
        }
      res.send("success!");
  
    } catch (err) {
        console.log(err)
        return next(err);
    }
  });


// Update comment
router.put('/comments/:commentId', async function(req, res, next){
    try{
        const [rows, fields] = await pool.query("update comments set blog_id = ?, comment = ?, comments.like = ?, comment_by_id = ?, comment_date = ? where id = ?;", [
            req.body.blog_id, req.body.comment, req.body.like, req.body.comment_by_id, req.body.comment_date, req.params.commentId
        ]);
        // return json ของรายการ blogs
        return res.json({
            message:"Comment ID "+req.params.commentId+" is updated",
            comment:req.body
        });
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
});

// Delete comment
router.delete('/comments/:commentId', async function(req, res, next){
    try{
        const [rows, fields] = await pool.query("delete from comments where id =?;", [
            req.params.commentId
        ]);
        // return json ของรายการ blogs
        return res.json({message:"Comment ID " +req.params.commentId + ' is deleted.'});
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
});


router.put('/comments/addlike/:commentId',async function(req, res, next){
    try{
        const [bog] = await pool.query("select blog_id from comments where id=?;",[
            req.params.commentId
        ])
        const [lik] = await pool.query("select comments.like from comments where id=?;",[
            req.params.commentId
        ])

        const [rows, fields] = await pool.query("update comments set comments.like = comments.like +  1 where id = ?;", [
            req.params.commentId
        ]);
        // return json ของรายการ blogs
        return res.json({
            blogId:bog[0].blog_id,
            commentId:req.params.commentId,
            likenum:lik[0].like +1
        
        
        });
    
      } catch (err) {
        console.log(err)
        return next(err);
      }
});


exports.router = router