import Post from './Post.js';
import PostService from './PostService.js';

class PostController {
  async create(req, res) {

    try {
      const post = await PostService.create(req.body);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAll(req, res) {

    try {
      const posts = await PostService.getAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'Id is not correct' });
      }
      const post = await PostService.getOne(id);
      res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({message: "Id is not correct"})
      }
      const updatedPost = await PostService.update(post)
      res.json(updatedPost)
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

    async delete(req, res) {
    try {
      const {id} = req.params;
      if (!id) {
        res.status(400).json({message: "Id is not correct"})
      }
      const post = await PostService.delete(id); 
      res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new PostController();
