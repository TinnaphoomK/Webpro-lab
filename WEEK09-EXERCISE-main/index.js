const express = require("express")
const path = require("path")

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs')
// set root folder for views
app.set('views', path.join(__dirname, 'views'))

// Statics
app.use(express.static(path.join(__dirname, 'static')))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers
const indexRouter = require('./routes/index')
const blogRouter = require('./routes/blog')
const commentRouter = require('./routes/comment')

app.use(indexRouter.router)
app.use(blogRouter.router)
app.use(commentRouter.router)

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})