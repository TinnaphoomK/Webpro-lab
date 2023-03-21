const express = require('express')
const router = express.Router()
var article = require('../article-db')

router.get('/', function(req, res, next) {
    var data = { title: 'Express', article: article }
    res.render('index', data)
})

router.get('/:id', function(req, res, next) {
    var data = { title: 'Express', article: article.find(article => article.id === req.params.id) }
    res.render('detail', data)
})

router.get('/blogapi', (req, res) => {
    res.json(article)
  })
  
  // กำหนดให้ path blogapi/id แสดงข้อมูลบทความตาม id ที่กำหนด
  
  router.get('/blogapi/:id', (req, res) => {
    res.render('detail', article.find(article => article.id === req.params.id))
  })

module.exports = router