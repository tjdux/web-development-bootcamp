const express = require('express');
const router = express.Router();
const prisma = require('../utils/prisma/index');
const bcrypt = require('bcrypt')
const { signUpValidator, handleValidationResult } = require('../middleware/validation-middleware')

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


module.exports = router;