const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieparser = require('cookie-parser');
const { mongoose } = require("mongoose");
const usermodel = require("./models/postModel"); 
const authRoute = require("./routes/authRoutes");
const adminRoute = require("./routes/adminroutes");
const commonRoute = require("./routes/commonRoute");
const http = require('http');
const { Server } = require('socket.io');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const PORT = 8000 || process.env.PORT;
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not Connected", err));
  

  app.use(cookieparser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use("/api", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api", commonRoute);




app.use(express.static("public"));
const users = {};

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('register', (userId) => {
    users[userId] = socket.id;
    console.log(`User ${userId} connected with socket ID ${socket.id}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    for (const [userId, socketId] of Object.entries(users)) {
      if (socketId === socket.id) {
        delete users[userId];
        break;
      }
    }
  });

  socket.on('private message', async (data) => {
    const { senderId, recipientId, message } = data;

    try {
      // Assuming 'Chat' is your mongoose model for storing messages
      const chatMessage = new Chat({
        sender: senderId,
        recipient: recipientId,
        message,
      });

      await chatMessage.save();

      const recipientSocketId = users[recipientId];
      if (recipientSocketId) {
        io.to(recipientSocketId).emit('private message', message);
      }
    } catch (err) {
      console.error('Failed to save chat message:', err);
    }
  });
});





server.listen(PORT,'0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
