const Post = require('../models/Post');

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching posts' });
  }
};

// Create a new post
const createPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newPost = new Post({
      title,
      content,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: 'Error creating post' });
  }
};

module.exports = { getPosts, createPost };
