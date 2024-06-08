import Post from '../Models/postModel.js';
import { errorHandler } from '../Utils/Error.js';

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create a post'));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const { title, content,image,category} = req.body
  const newPost = new Post({ title, content,image,category});
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
}