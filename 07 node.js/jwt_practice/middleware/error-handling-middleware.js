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
  }
}