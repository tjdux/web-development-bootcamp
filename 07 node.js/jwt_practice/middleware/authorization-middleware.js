const prisma = require('../utils/prisma/index');

module.exports = async function checkPostOwner(req, res, next){
  const postId = Number(req.params.postId);
  const userId = req.user.userId;

  const post = await prisma.post.findUnique({
    where: { postId }
  })

  if (!post){
    return next(new Error("PostNotFound"))
  }

  if (userId !== post.userId){
    return next(new Error("Forbidden"))
  }

  res.locals.post = post;
  next();
}