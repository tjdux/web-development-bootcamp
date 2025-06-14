const express = require('express');
const app = express();
const PORT = 3000;

const userRouter = require('./routes/userRouter')

const cookieParser = require('cookie-parser');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cookieParser());
app.use(session({
  resave: false,
  cookie: {
    httpOnly: true
  },
  saveUninitialized: true,
  secret: process.env.SECRET,
  store: new fileStore()
}))

app.use('/', userRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})