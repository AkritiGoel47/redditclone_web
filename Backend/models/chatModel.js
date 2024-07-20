const mongoose = require('mongoose');
const User = require('./user')


const chatSchema = new mongoose.Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for sender
    required: true
  },
  recipient: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for recipient
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Chat', chatSchema);