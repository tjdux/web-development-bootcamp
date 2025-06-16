const prisma = require('../utils/prisma/index')

class AuthRepository{
  async findUserByEmail(email){
    try{
      return await prisma.user.findFirst({
        where: { email }
      })
    } catch (e) {
      throw new Error("DataBaseError")
    }
  }

  async createNewUser(email, password, nickname){
    try{
      const user = await prisma.user.create({
        data: { email, password, nickname }
      })
      const {password:_, ...newUserData} = user;
      return newUserData;
    } catch (e) {
      throw new Error("DataBaseError")
    }
  }
}

module.exports = new AuthRepository()