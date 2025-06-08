const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./router')

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/api/goods", router);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})