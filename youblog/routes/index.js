const express = require('express')
const router = express.Router()
var article = require('../article-db')

router.get('/', function(req, res, next) {
    var data = { title: 'Express', article: article }
    res.render('index', data)

})
 
module.exports = router