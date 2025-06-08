const express = require('express');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.use('/views', express.static(__dirname + '/views'));

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})