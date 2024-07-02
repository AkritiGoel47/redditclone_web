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
  comment: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    like: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    reply: [{
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
      },
      content: {
        type: String,
        
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      like: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }],
    }]
  }],
   // Track likes on posts
  like: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  //Track upvotes on posts
  upvote: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("posts", postSchema);
