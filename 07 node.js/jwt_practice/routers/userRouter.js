const express = require('express');
const router = express.Router();
require('dotenv').config();
const { signUpValidator, loginValidator, handleValidationResult } = require('../middleware/validation-middleware')
const authController = require('../controllers/auth.controller')

/** 회원가입
 *  1. 닉네임, 이메일, 비밀번호 입력 검증
 *  1-1. 비밀번호 6글자 이상
 *  1-2. 이메일 중복 확인
 *  2. 데이터 베이스에 저장
 */

// 회원가입
router.post('/sign-up', signUpValidator, handleValidationResult, authController.signUp);

/** 로그인
 * 1. 이메일, 비밀번호 입력 여부 확인
 * 2. 이메일에 해당하는 사용자 찾기
 * 3. 사용자 존재 여부 확인
 * 4. 비밀번호 일치 여부 확인
 * 5. jwt 토큰 발급
 * 6. jwt 토큰 전달
 */
router.post('/login', loginValidator, handleValidationResult, authController.logIn);

module.exports = router;