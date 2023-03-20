// ดึงข้อมูล json มาเก็บไว้ในตัวแปร
const express = require('express')
const router = express.Router()

const article = require('../article-db')

// กำหนดให้ path blogapi แสดงข้อมูลบทความทั้งหมดในรูปแบบ json

router.get('/blogapi', (req, res) => {
  res.json(article)
})

// กำหนดให้ path blogapi/id แสดงข้อมูลบทความตาม id ที่กำหนด

router.get('/blogapi/:id', (req, res) => {
  res.render('detail', article.find(article => article.id === req.params.id))

})

module.exports = router