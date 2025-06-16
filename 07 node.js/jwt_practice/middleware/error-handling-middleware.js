module.exports = function (err, req, res, next) {
  switch (err.message){
    case "InputValidation":
    case "PasswordValidation":
      return res.status(401).send({
        errorMessage: "입력한 요청이 잘못되었습니다."
      })
    case "ExistingEmail":
      return res.status(400).send({
        errorMessage: "이미 가입된 이메일입니다."
      })
    case "DataBaseError":
      return res.status(500).send({
        errorMessage: "데이터 베이스 오류"
      })
    case "UserNotFound":
      return res.status(404).send({
        errorMessage: "존재하지 않는 유저"
      })
    case "PasswordError":
      return res.status(400).send({
        errorMessage: "일치하지 않는 비밀번호"
      })
    case "TokenNotMatched":
      return res.status(401).send({
        errorMessage: "로그인을 해주세요."
      })
    case "PostNotFound":
      return res.status(404).send({
        errorMessage: "존재하지 않는 포스트"
      })
    case "Forbidden":
      return res.status(401).send({
        errorMessage: "접근권한이 없습니다"
      })
    default:
      return res.status(500).send({
        errorMessage: "서버 오류"
      })
  }
}