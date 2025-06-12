const express = require('express');
const app = express();
const PORT = 3000;

const userRouter = require('./routes/userRouter')

const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cookieParser());

app.use('/', userRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})