const { body, validationResult, param, oneOf } = require('express-validator')

exports.signUpValidator = [
  body('email')
    .isEmail().withMessage("이메일 형식이 아닙니다.")
    .notEmpty().withMessage("이메일이 없습니다."),
  body("password")
    .isLength({ min: 6 }).withMessage("비밀번호가 6글자 이하")
    .notEmpty().withMessage("비밀번호가 없습니다."),
  body("nickname")
    .notEmpty().withMessage("이름이 없습니다.")
]

exports.loginValidator = [
  body('email')
    .isEmail().withMessage("이메일 형식이 아닙니다.")
    .notEmpty().withMessage("이메일이 없습니다."),
  body("password")
    .isLength({ min: 6 }).withMessage("비밀번호가 6글자 이하")
    .notEmpty().withMessage("비밀번호가 없습니다.")
]

// 게시글 작성
exports.postValidator = [
  body('title')
    .notEmpty().withMessage("제목이 없습니다."),
  body('content')
    .notEmpty().withMessage("내용이 없습니다.") 
]

// 특정 게시물 조회 (params 검증)
exports.postIdValidator = [
  param('postId')
    .notEmpty().withMessage("postId가 없습니다.")
    .isInt().withMessage("id가 숫자여야 합니다.")
]

// 게시글 수정
exports.postUpdateValidator = [
  ...this.postIdValidator,
  oneOf([
    body('title')
      .notEmpty().withMessage("제목이 없습니다."),
    body('content')
      .notEmpty().withMessage("내용이 없습니다.")
  ])
]
exports.handleValidationResult = (req, res, next) => {
  const result = validationResult(req).errors;
  if (result.length){
    const extractedError = result.map(err => err.msg);
    console.log(extractedError);
    return next(new Error("InputValidation"))
  }

  next();
}