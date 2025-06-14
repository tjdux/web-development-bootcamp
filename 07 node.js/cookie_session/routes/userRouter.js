const express = require('express');
const router = express.Router();
require('dotenv').config()

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

// 세션에 접속 유저 수 저장 
router.get('/set-session', (req, res) => {
  console.log(req.session.users);
  if (!req.session.users){
    req.session.users = 1;
  } else {
    req.session.users += 1;
  }

  res.send({
    "접속 유저 수": req.session.users 
  })
})

// 세션에 사용자 정보 저장 
router.get('/login/:username', (req, res) => {
  const { username } = req.params;
  req.session.user = {
    username,
    loginAt: new Date().toString()
  }

  // 쿠키
  res.cookie('username', username, {
    maxAge: 1000 * 60 * 5,
    httpOnly: false,
    sameSite: 'Lax'
  })

  res.send({
    message: `${username}님 로그인 성공`,
    loginAt: req.session.user.loginAt
  })
})

module.exports = router;