import Post from './Post.js';

class PostController {
  async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
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
      const post = await Post.findById(id);
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
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
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
      const post = await Post.findOneAndDelete(id); 
      res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new PostController();
