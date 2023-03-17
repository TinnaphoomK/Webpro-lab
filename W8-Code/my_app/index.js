const express = require("express");
const app = express();

app.use(express.static('static'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render('home.ejs', 
    { 
      title: "This is my home", 
      message: "Welcome to Web Programming!",
      num: 3,
      items: ['Bundit', 'John', 'Sally']
    }
  )
});

app.get("/hello", (req, res) => {
    res.send("HELLO! you sent me a GET request.");
});

// Test POST request in Postman App
app.post("/hello", (req, res) => {
    res.send("HELLO! you sent me a POST request.");
  });

app.get("/bye", (req, res) => {
  res.send("BYE! see you again soon.");
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
