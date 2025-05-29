const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('./views', express.static(__dirname + "/views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('form', {title: "폼 실습"})
})

app.get('/getForm', (req, res) => {
  console.log(req.query);
  res.render('result', {userInfo: req.query})
})

app.post('/postForm', (req, res) => {
  console.log(req.body);
  res.render('result', {userInfo: req.body})
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})