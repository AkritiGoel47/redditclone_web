const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
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

    const post = new Post({ title, description, status: "pending",likes: [], 
      upvotes: []  });

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

    const userId = req.cookies.user_id;
    const postData = await Post.find({ status: "approved" });
    

    return res.status(200).json({
      success: true,
      msg: "Post fetched successfully!",
      data: postData,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
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
      success: false,
      msg: error.message,
    });
  }
};
const addComment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }
    const { postId, userId, content } = req.body;
    if (!postId || !content || !userId) {
      return res
        .status(400)
        .json({
          success: false,
          msg: "postId,content and userId are required",
        });
    }
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }

    post.comment.push({ userId, content });
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }
    const { postId, commentId, userId, content } = req.body;
    if (!postId || !commentId || !userId || !content) {
      return res
        .status(400)
        .json({
          success: false,
          msg: "postId ,commentId,content and userId are required",
        });
    }
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }

    const comment = post.comments.id(commentId);
    if (!comment) {
      return res.status(404).json({ success: false, msg: "Comment not found" });
    }

    comment.replies.push({ userId, content });
    const replyData = await post.save();

    return res
      .status(200)
      .json({ success: true, msg: "Reply added", data: replyData });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

const likePost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }
    const { postId } = req.body;
    const userId = req.cookies.user_id;
    if (!postId || !userId) {
      return res
        .status(400)
        .json({ success: false, msg: "postId and userId are required" });
    }
    if (
      !mongoose.Types.ObjectId.isValid(postId) ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid postId or userId format" });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }

    if (!post.like.includes(userId)) {
      post.like.push(userId);
      await post.save();
    }

    return res
      .status(200)
      .json({ success: true, msg: "Post liked", data: post });
  } catch (error) {
    console.error("Error in likePost:", error);
    return res.status(400).json({ success: false, msg: error.message });
  }
};
const likeComment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }

    const { postId, commentId } = req.body;
    const userId = req.cookies.user_id;
    if (!postId || !commentId || !userId) {
      return res
        .status(400)
        .json({
          success: false,
          msg: "postId, commentId, and userId are required",
        });
    }
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }

    const comment = post.comment.id(commentId);
    if (!comment) {
      return res.status(404).json({ success: false, msg: "Comment not found" });
    }

    if (!comment.like.includes(userId)) {
      comment.like.push(userId);
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        msg: "Errors",
        errors: errors.array(),
      });
    }
    const { postId } = req.body;
    const userId = req.cookies.user_id;
    if (!postId || !userId) {
      return res.status(400).json({ success: false, msg: "postId and userId are required" });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ success: false, msg: "Post not found" });
    }

    if (!post.upvote.includes(userId)) {
      post.upvote.push(userId);
      await post.save();
    }

    return res.status(200).json({ success: true, msg: "Post upvoted", data: post });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};
const getuserid = async (req, res) => {
  

    return res.status(200).json({ success: true, user_id: req.user._id,  });
  
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
  getuserid
 
};
