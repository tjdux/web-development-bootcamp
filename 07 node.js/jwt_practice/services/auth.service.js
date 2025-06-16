const authRepository = require('../repositories/auth.repository')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

class AuthService{
  async signUp(email, password, nickname){
    const user = await authRepository.findUserByEmail(email);
    if (user){
      throw new Error("ExistingEmail")
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUserData = await authRepository.createNewUser(email, bcryptPassword, nickname);
    return newUserData;
  }

  async logIn(email, password){
    const user = await authRepository.findUserByEmail(email);
    if (!user){
      throw new Error("UserNotFound");
    }

    const isPasswordVerified = await bcrypt.compare(password, user.password);

    if (!isPasswordVerified){
      throw new Error("PasswordError")
    }

    const token = jwt.sign({
      userId: user.userId
    }, process.env.SECRET_KEY, {
      expiresIn: '10h'
    })

    return token;
  }
  
}

module.exports = new AuthService();