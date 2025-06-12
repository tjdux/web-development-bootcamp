const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authenticate-middleware')
require('dotenv').config()

// 토큰 생성 (서버 ➡️ 서드파티 앱)
router.get('/login', (req, res) => {
  // 임시 데이터
  const user = {
    id: 1,
    username: "홍길동",
    role: "user",
  }

  const token = jwt.sign(user, process.env.SECRET_KEY, {
    expiresIn: "10h"
  })
  console.log(token)

  return res.json({
    token
  })
})

// 토큰 검증 (서드파티 앱 ➡️ 서버)
router.get('/user', authenticateToken, (req, res, next) => {
  console.log(req.user);
  res.send(req.user);
})

// 쿠키 저장
router.get('/set-cookie', (req, res) => {
  res.cookie('login', 'true');
  return res.send('set cookie')
})

// 쿠키 가져오기
router.get('/get-cookie', (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  res.json({ cookie })
})

module.exports = router;