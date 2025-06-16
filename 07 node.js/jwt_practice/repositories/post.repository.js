const prisma = require('../utils/prisma/index')

class PostRepository{
  async getAllPosts(){
    try {
      return await prisma.post.findMany({
        include:{
          user: {
            select: {
              userId: true,
              nickname: true
            }
          }
        }
      })
    } catch (e) {
      throw new Error("DataBaseError")
    }
  }

  async createPost(title, content, userId){
    try{
      return await prisma.post.create({
        data: { title, content, userId }
      })
    } catch (e) {
      throw new Error("DataBaseError")
    }
  }

  async getPostByPostId(postId){
    try{
      return await prisma.post.findUnique({
        where: { postId },
        include:{
          user:{
            select: {
              userId: true,
              nickname: true
            }
          }
        }
      })
    } catch (e) {
      throw new Error("DataBaseError")
    }
  }

  async updatePost(postId, post, title, content){
    try{
      return await prisma.post.update({
        where: { postId },
        data: {
          title: title ?? post.title,
          content: content ?? post.content
        }
      })
    } catch (e) {
      throw new Error("DataBaseError")
    }
  }

  async deletePost(postId){
    try{
      return await prisma.post.delete({
        where: { postId }
      }) 
    } catch (e) {
      throw new Error("DataBaseError")
    }
  }
}

module.exports = new PostRepository()