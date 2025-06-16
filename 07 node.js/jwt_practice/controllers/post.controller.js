const postService = require('../services/post.service')

class PostController{
  async getAllPosts(req, res){
    const posts = await postService.getAllPosts();
    return res.status(200).send({
      posts
    })
  }

  async createPost(req, res){
    const { title, content } = req.body;
    const userId = req.user.userId;

    const newPost = await postService.createPost(title, content, userId);
    return res.status(200).send({
      message: "새로운 포스트 생성",
      newPost
    })
  }

  async getPostByPostId(req, res){
    const postId = Number(req.params.postId);
    const post = await postService.getPostByPostId(postId);
    return res.status(200).send({
      post
    })
  }

  async updatePost(req, res){
    const postId = Number(req.params.postId);
    const { title, content } = req.body;
    const post = res.locals.post;
    const updatedPost = await postService.updatePost(postId, post, title, content);
    return res.status(200).send({
      message: "포스트 수정",
      updatedPost
    })  
  }

  async deletePost(req, res){
    const postId = Number(req.params.postId);
    const deletedPost = postService.deletePost(postId);
    return res.status(200).send({
      message: "포스트 삭제",
      deletedPost
    })
  }
}

module.exports = new PostController();