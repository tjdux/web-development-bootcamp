const express = require('express');
const router = express.Router();

const {users, posts} = require('../data/data.js')

router.get('/', (req, res) => {
  res.send(users.map(user => ({"id": user})))
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

router.get('/:id', (req, res) => {
  const userId = Number(req.params.id);
  if (!users.includes(userId)){
    return res.send(`
            {
      "error": "해당 사용자를 찾을 수 없습니다."
      }
      `)
  }

  return res.send(`{
    "id": ${userId}
    }`)
})

router.delete('/:id', (req, res) => {
  const userId = Number(req.params.id);
  if (!users.includes(userId)){
    return res.send(`
      {
"error": "해당 사용자를 찾을 수 없습니다."
}
      `)
  }

  users.splice(users.indexOf(userId), 1);
  res.send(`
    {
"message": "사용자가 삭제되었습니다."
}
    `)
})

router.get('/:id/posts', (req, res) => {
  const userId = Number(req.params.id);
  const publishedPosts = posts.filter(post => post.userId === userId);
  if (publishedPosts.length === 0){
    return res.send(`
      {
"error": "해당 사용자를 찾을 수 없습니다."
}
      `)
  }

  res.send(publishedPosts);
})

module.exports = router;