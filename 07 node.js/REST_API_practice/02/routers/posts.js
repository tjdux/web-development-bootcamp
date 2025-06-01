const express = require('express');
const router = express.Router();

const {posts} = require('../data/data.js')

router.use(express.json());
router.use(express.urlencoded({extended: true}))

router.get('/', (req, res) => {
  res.send(posts);
})

router.get('/:id', (req, res) => {
  const postId = Number(req.params.id);
  return res.send(posts[postId-1]);
})

router.post('/', (req, res) => {
  const newPost = req.body;
  posts.push({
    "id": posts.length+1,
    ...newPost
  })
  res.send(posts[posts.length-1])
})

router.put('/:id', (req, res) => {
  const postId = Number(req.params.id);
  const modifiedPost = req.body;
  posts[postId-1] = {
    ...posts[postId - 1],
    ...modifiedPost,
  }
  res.send(posts[postId-1])
})

router.delete('/:id', (req, res) => {
  const postId = Number(req.params.id);
  posts.splice(postId-1, 1);
  res.send(`
{
"message": "게시글이 성공적으로 삭제되었습니다."
}
    `)
})

module.exports = router;