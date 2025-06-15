const express = require('express');
const router = express.Router();
const prisma = require('../utils/prisma/index');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { signUpValidator, loginValidator, handleValidationResult } = require('../middleware/validation-middleware')

/** 회원가입
 *  1. 닉네임, 이메일, 비밀번호 입력 검증
 *  1-1. 비밀번호 6글자 이상
 *  1-2. 이메일 중복 확인
 *  2. 데이터 베이스에 저장
 */

// 회원가입 
router.post('/sign-up', signUpValidator, handleValidationResult, async (req, res, next) => {
  const { email, password, nickname } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: { email }
    })

    if (user) {
      return next(new Error("ExistingEmail"))
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password, salt)

    await prisma.user.create({
      data: {
        email, 
        password: bcryptPassword,
        nickname
      }
    })

    return res.status(201).send({
      message: "회원가입 완료"
    })
  } catch (e) {
    return next(new Error("DataBaseError"))
  }
})

/** 로그인
 * 1. 이메일, 비밀번호 입력 여부 확인
 * 2. 이메일에 해당하는 사용자 찾기
 * 3. 사용자 존재 여부 확인
 * 4. 비밀번호 일치 여부 확인
 * 5. jwt 토큰 발급
 * 6. jwt 토큰 전달
 */

router.post('/login', loginValidator, handleValidationResult, async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user){
      return next(new Error("UserNotFound"))
    }

    const isPasswordVerified = await bcrypt.compare(password, user.password)

    if (!isPasswordVerified){
      return next(new Error("PasswordError"))
    }

    const token = jwt.sign({
      userId: user.userId
    }, process.env.SECRET_KEY, {
      expiresIn: '10h'
    })

    return res.status(200).send({
      token
    })
  } catch (e){
    return next(new Error());
  }

})

module.exports = router;