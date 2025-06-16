const express = require('express');
const router = express.Router();
const prisma = require('../utils/prisma/index')
const authenticateToken = require('../middleware/authenticate-middleware')
const { postValidator, postIdValidator, postUpdateValidator, handleValidationResult} = require('../middleware/validation-middleware')
const checkPostOwner = require('../middleware/authorization-middleware')
const postController = require('../controllers/post.controller')

// 전체 포스트 조회 (누구나 조회 가능, 작성자 정보도 같이)
router.get('/', postController.getAllPosts);

// 포스트 생성 (로그인된 유저만 작성 가능)
router.post('/', authenticateToken, postValidator, handleValidationResult, postController.createPost)

// 특정 포스트 조회 (누구나 조회 가능)
router.get('/:postId', postIdValidator, handleValidationResult, postController.getPostByPostId);

// 포스트 수정 (작성자만 가능)
router.put('/:postId', authenticateToken, postUpdateValidator, handleValidationResult, checkPostOwner, postController.updatePost);

// 포스트 삭제 (작성자만 가능)
router.delete('/:postId', authenticateToken, postIdValidator, handleValidationResult, checkPostOwner, postController.deletePost);

module.exports = router;