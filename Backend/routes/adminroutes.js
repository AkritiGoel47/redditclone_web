const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/authMiddleware");
const { onlyAdminAccess } = require("../middlewares/adminMiddleware");
const Post = require("../models/postModel");

// Route to fetch all posts (pending, approved, rejected)
router.get("/post", verifyToken, onlyAdminAccess, async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({ success: true, data:posts });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
});

// Route to approve a post
router.post("/approve-post", verifyToken, onlyAdminAccess, async (req, res) => {
  try {
    const postId = req.body.id;
    if (!postId) {
      return res
        .status(404)
        .json({ success: false, error: "Post does not exist" });
    }
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }
    post.status = "approved";
    await post.save();
    res.json({ success: true,data: post });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
});

// Route to reject a post
router.post("/reject-post", verifyToken, onlyAdminAccess, async (req, res) => {
  try {
    const postId = req.body.id;
    if (!postId) {
      return res
        .status(404)
        .json({ success: false, error: "Post does not exist" });
    }
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }
    post.status = "rejected";
    await post.save();
    res.json({ success: true, data:post });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
});

module.exports = router;
