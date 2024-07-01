const { validationResult } = require("express-validator");
const Post = require("../models/postModel");
const createPost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }

    const { title, description } = req.body;

    const post = new Post({ title, description, status: "pending" });

    const postData = await post.save();
    const postfullData = await Post.findOne({ _id: postData._id });
    return res.status(200).json({
      success: true,
      msg: "Post created successfully ,pending admin approval",
      data: postfullData,
    });
  } catch (error) {
    return res.status(400).json({
      success: failure,

      msg: error.message,
    });
  }
};
const getPost = async (req, res) => {
  try {
    const postData = await Post.find({ status: "approved" });
    return res.status(200).json({
      success: true,
      msg: "Post fetched successfully!",
      data: postData,
    });
  } catch (error) {
    return res.status(400).json({
      success: failure,
      msg: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }

    const { id } = req.body;
    const isExist = await Post.findOne({ _id: id });
    if (!isExist) {
      return res.status(400).json({
        success: failure,
        msg: "Post does not exist",
      });
    }

    await Post.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      msg: "Post deleted successfully!",
    });
  } catch (error) {
    return res.status(400).json({
      success: failure,
      msg: error.message,
    });
  }
};
const addComment = async (req, res) => {
  try {
    const { postId, userId, content } = req.body;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }

    post.comments.push({ userId, content });
    await post.save();

    return res
      .status(200)
      .json({ success: true, msg: "Comment added", data: post });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

const addReply = async (req, res) => {
  try {
    const { postId, commentId, userId, content } = req.body;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }

    const comment = post.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ success: false, msg: "Comment not found" });
    }

    comment.replies.push({ userId, content });
    await post.save();

    return res
      .status(200)
      .json({ success: true, msg: "Reply added", data: post });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

const likePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }

    if (!post.likes.includes(userId)) {
      post.likes.push(userId);
      await post.save();
    }

    return res
      .status(200)
      .json({ success: true, msg: "Post liked", data: post });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

const likeComment = async (req, res) => {
  try {
    const { postId, commentId, userId } = req.body;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }

    const comment = post.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ success: false, msg: "Comment not found" });
    }

    if (!comment.likes.includes(userId)) {
      comment.likes.push(userId);
      await post.save();
    }

    return res
      .status(200)
      .json({ success: true, msg: "Comment liked", data: post });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

const upvotePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }

    post.upvotes += 1;
    await post.save();

    return res
      .status(200)
      .json({ success: true, msg: "Post upvoted", data: post });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

module.exports = {
  createPost,
  getPost,
  deletePost,
  addComment,
  addReply,
  likePost,
  likeComment,
  upvotePost,
};
