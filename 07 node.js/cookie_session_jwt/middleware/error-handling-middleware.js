module.exports = function (err, req, res, next) {
  switch (err.message) {
    case "wrong password":
      return res.status(400).send({
        errorMessage: "일치하지 않는 패스워드"
      })
    case "existing email":
      return res.status(400).send({
        errorMessage: "이미 가입된 메일"
      })
    case "Forbidden":
      return res.status(401).send({
        errorMessage: "접근 권한이 없습니다."
      })
    case "UserNotFound":
    case "Need login":
    case "need login":
      return res.status(401).send({
        errorMessage: "로그인을 해주세요"
      })
  }
}