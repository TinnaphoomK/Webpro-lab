const { json } = require("express");
const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get('/:blogId/comments', function (req, res, next) {
});

router.post('/:blogId/comments', async function (req, res, next) {
    const comment = req.body.comment

    const conn = await pool.getConnection()
    await conn.beginTransaction();

    try {
        const [rows1, fields1] = await conn.query(
            'INSERT INTO `comments` (`blog_id`, `comment`, `like`, `comment_date`) VALUES (?, ?, ?, CURRENT_TIMESTAMP)',
            [req.params.blogId, comment, 0]
        )
        const [rows2, fields2] = await conn.query(
            'SELECT * FROM `comments` WHERE `id` = ?',
            [rows1.insertId]
        )
        await conn.commit()
        return res.json(rows2[0])
    } catch (err) {
        await conn.rollback();
        return res.status(500).json(err)
    } finally {
        console.log('finally')
        conn.release();
    }
});

router.put('/comments/:commentId', async function (req, res, next) {
    try {
        const [rows1, fields1] = await pool.query(
            'UPDATE comments SET comment=? WHERE id=?', [req.body.comment, req.params.commentId]
        )
        console.log(rows1)
        res.json({ comment: req.body.comment })
    } catch (error) {
        res.status(500).json(error)
    }
});

// Delete comment
router.delete('/comments/:commentId', async function (req, res, next) {
    try {
        const [rows1, fields1] = await pool.query(
            'DELETE FROM comments WHERE id=?', [req.params.commentId]
        )
        res.json("success")
    } catch (error) {
        res.status(500).json(error)
    }
});

// Add Like comment
router.put('/comments/addlike/:commentId', async function (req, res, next) {
    const conn = await pool.getConnection()
    await conn.beginTransaction();

    // note : like is a syntax of sql. must call name of table before like
    try {
        const [rows1, fields1] = await conn.query(
            'SELECT * FROM comments WHERE id=?', [req.params.commentId]
        )
        await conn.query(
            `UPDATE comments SET comments.like = ? WHERE id=?`, [rows1[0].like + 1, req.params.commentId]
        )

        await conn.commit()

        res.json({ message: "Like Incress", like: rows1[0].like + 1 })
    } catch (error) {
        await conn.rollback();
        res.status(500).json(error)
    } finally {
        console.log('finally')
        conn.release();
    }
});


exports.router = router