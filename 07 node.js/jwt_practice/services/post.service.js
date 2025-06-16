const postRepository = require('../repositories/post.repository')

class PostService{
  async getAllPosts(){
    const posts = await postRepository.getAllPosts();
    return posts
  }

  async createPost(title, content, userId){
    const newPost = await postRepository.createPost(title, content, userId);
    return newPost;
  }

  async getPostByPostId(postId){
    const post = await postRepository.getPostByPostId(postId);
    if (!post){
      throw new Error("PostNotFound")
    }
    return post;
  }

  async updatePost(postId, post, title, content){
    const updatedPost = await postRepository.updatePost(postId, post, title, content);
    return updatedPost;
  }

  async deletePost(postId){
    const deletedPost = await postRepository.deletePost(postId);
    return deletedPost;
  }
}

module.exports = new PostService();