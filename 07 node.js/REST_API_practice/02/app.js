const express = require('express');
const app = express();
const PORT = 3000;
const usersRouter = require('./routers/users');

app.use('/users', usersRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})