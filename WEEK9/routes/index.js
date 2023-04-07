const express = require('express')
const router = express.Router()
var article = require('../article-db')

router.get('/', function(req, res, next) {
    var searchtext = req.query.search;
    var resultsearch = article;
    if(searchtext){
        resultsearch = article.filter(item => {
            return item.title.toLowerCase().includes(searchtext.toLowerCase()) || item.author.toLowerCase().includes(searchtext.toLocaleLowerCase())
        })
    }
    var data = { article: resultsearch , title: 'Express' }
    res.render('index', data)
})

router.get('/:id', function(req, res, next) {
    var id = req.params.id
    var result = article.find(item => {return item.id === id})
    var data = {article: result}
    res.render('detail', data)
})  

module.exports = router