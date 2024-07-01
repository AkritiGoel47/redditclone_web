const mongoose = require("mongoose");
const User = require('./user')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],

    default: "pending",
  },
  //Track comments on posts
  comments: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    replies: [{
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }],
    }]
  }],
   // Track likes on posts
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  //Track upvotes on posts
  upvotes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("posts", postSchema);
