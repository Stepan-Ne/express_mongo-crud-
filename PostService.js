import Post from './Post.js'

class PostService {
  async create(post) {

      const newPost = await Post.create(post);
      return newPost;
  }

  async getAll() {
   
      const posts = await Post.find();
      return posts;
  }

  async getOne(id) {
    
      const post = await Post.findById(id);
     return post;
  }

  async update(post) {

    if (!post_id) {
      throw new Error('there is no id')
    }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
     return updatedPost;
  }

    async delete(id) {
    
      const post = await Post.findOneAndRemove(id); 
     return post;
    }
  }


export default new PostService();