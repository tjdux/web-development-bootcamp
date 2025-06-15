const express = require('express');
const router = express.Router();
const prisma = require('../utils/prisma/index')
const authenticateToken = require('../middleware/authenticate-middleware')

// 전체 포스트 조회 (누구나 조회 가능, 작성자 정보도 같이)
router.get('/', async (req, res, next) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        user: {
          select: {
            userId: true,
            nickname: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return res.status(200).send({
      posts
    })
  } catch (e){
    return next(new Error("DataBaseError"))
  }
})

// 포스트 생성 (로그인된 유저만 작성 가능)
router.post('/', authenticateToken, async(req, res, next) => {
  const { title, content } = req.body;
  const userId = req.user.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        userId
      }
    })

    return res.status(200).send({
      message: "새로운 포스트 생성",
      newPost
    })
  } catch (e) {
    return next(new Error("DataBaseError"))
  }
})

// 특정 포스트 조회 (누구나 조회 가능)
router.get('/:postId', async (req, res, next) => {
  const postId = Number(req.params.postId);

  try {
    await checkPostExists(postId, next)

    const post = await prisma.post.findUnique({
      where: { postId },
      include: {
        user: {
          select: {
            userId: true,
            nickname: true
          }
        }
      }
    })

    return res.status(200).send({
      post
    })
  } catch (e) {
    return next(new Error("DataBaseError"))
  }

})

// 포스트 수정 (작성자만 가능)
router.put('/:postId', async (req, res, next) => {
  const postId = Number(req.params.postId);
  const { title, content } = req.body;

  try {
    const post = await checkPostExists(postId, next);

    const updatedPost = await prisma.post.update({
      where: { postId },
      data: {
        title: title ?? post.title,
        content: content ?? post.content
      }
    })

    return res.status(200).send({
      message: "포스트 수정",
      updatedPost
    })
  } catch (e) {
    return next(new Error("DataBaseError"))
  }
})

// 포스트 삭제 (작성자만 가능)
router.delete('/:postId', async (req, res, next) => {
  const postId = Number(req.params.postId);


  try {
    await checkPostExists(postId, next);

    await prisma.post.delete({
      where: { postId }
    })
    
    return res.status(200).send({
      message: "포스트 삭제"
    })
  } catch (e) {
    return next(new Error("DataBaseError"))
  }
})

const checkPostExists = async function(postId, next) {
  const post = await prisma.post.findUnique({
    where: { postId }
  })

  if (!post){
    return next(new Error("NonExistingPost"))
  }

  return post
}


module.exports = router;