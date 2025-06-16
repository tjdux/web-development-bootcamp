const authService = require('../services/auth.service')

class AuthController {
  async signUp(req, res){
    const { email, password, nickname } = req.body;
    const newUserData = await authService.signUp(email, password, nickname)
    return res.status(201).send({
      message: "회원가입 완료",
      newUserData
    })
  }

  async logIn(req, res){
    const { email, password } = req.body;
    const token = await authService.logIn(email, password);
    return res.status(200).send({
      token
    })
  }
}

module.exports = new AuthController();