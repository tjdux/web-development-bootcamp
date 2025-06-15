const express = require('express');
const app = express();
const PORT = 3000;

const userRouter = require('./routers/userRouter')
const postRouter = require('./routers/postRouter')

const errorHandlingMiddleware = require('./middleware/error-handling-middleware')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.use(errorHandlingMiddleware)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})