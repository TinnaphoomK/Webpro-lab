const express = require('express')

const app = express()

const path = require('path')

// Setup ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setup static path
app.use(express.static(path.join(__dirname, 'public')))

// Config Router
const indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
