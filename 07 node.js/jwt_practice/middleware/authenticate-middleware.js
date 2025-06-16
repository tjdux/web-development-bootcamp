const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = function (req, res, next){
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]

  const verifiedToken = verifyToken(token);

  if (!verifiedToken){
    return next(new Error("TokenNotMatched"))
  }

  req.user = verifiedToken;
  next();
}

function verifyToken(token){
  try{
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (e) {
    return false;
  }
}