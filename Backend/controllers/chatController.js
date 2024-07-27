const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Chat = require('../models/chatModel');
const io = require('../socket');


const sendPrivateMessage = async (socket, data) => {
  try {
    const { senderId, recipientId, message } = data;

   
    if (!senderId || !recipientId || !message) {
      throw new Error('Sender ID, recipient ID, and message are required');
    }
    // const io = new socketIo.Server;
    const chatMessage = new Chat({
      sender: senderId,
      recipient: recipientId,
      message,
    });

   
    const savedMessage = await chatMessage.save();

 
    const recipientSocketId = io.getUserSocket(recipientId);
    if (recipientSocketId) {
      io.getIo().to(recipientSocketId).emit('private message', savedMessage);
    } else {
      throw new Error('Recipient socket not found');
    }
  } catch (err) {
    console.error('Failed to send private message:', err);
    socket.emit('private message error', { error: err.message });
  }
};


const initSocket = (socket) => {
  console.log('A user connected:', socket.id);

  
  socket.on('register', (userId) => {
    try {
      if (!userId) {
        throw new Error('User ID is required');
      }
      io.addUserSocket(userId, socket.id); // Store user's socket ID
      console.log(`User ${userId} connected with socket ID ${socket.id}`);
    } catch (err) {
      console.error('Error registering user:', err);
      socket.emit('register error', { error: err.message });
    }
  });

  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    io.removeUserSocket(socket.id); 
  });

 
  socket.on('private message', (data) => {
    sendPrivateMessage(socket, data);
  });
};

module.exports = {
  initSocket,
};
