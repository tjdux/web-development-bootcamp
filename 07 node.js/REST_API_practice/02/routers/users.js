const express = require('express');
const router = express.Router();

const {users, posts} = require('../data/data.js')

router.use(express.json());
router.use(express.urlencoded({extended: true}))

router.get('/', (req, res) => {
  res.send(users.map(user => ({id: user})))
})

router.post('/', (req, res) => {
  const {id} = req.body;
  if (users.includes(Number(id))){
    return res.send(`
            {
      "error": "이미 존재하는 사용자입니다."
      }
    `)
  }

  users.push(Number(id));
  res.send(`
    {
      "id": ${id}
    }`)
})

module.exports = router;