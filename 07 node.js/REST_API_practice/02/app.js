const express = require('express');
const app = express();
const PORT = 3000;
const usersRouter = require('./routers/users');
const postRouter = require('./routers/posts')

app.use('/users', usersRouter);
app.use('/posts', postRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})

