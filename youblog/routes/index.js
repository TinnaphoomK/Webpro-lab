const express = require('express')
const router = express.Router()

var article = require('../article-db')

router.get('/', function(req, res, next) {
    var data = { title: 'Express', article: article }
    console.log(data)
    res.render('index', data)

})

router.get('/:id', function(req, res, next) {
    var data = { title: 'Express', article: article.find(article => article.id === req.params.id) }
    res.render('detail', data)
})

router.get('/', function(req, res, next) {
    var seacrhFilter = req,query,serach;
    if (searchFilter){
        var getarticle = article.filter(function (article){
            return (
                article.tile
            )
        })
    }
})



 
module.exports = router