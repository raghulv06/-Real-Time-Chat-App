// server.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chatdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define message schema
const MessageSchema = new mongoose.Schema({
  user: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
});
const Message = mongoose.model('Message', MessageSchema);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Socket.io logic
io.on('connection', (socket) => {
  socket.on('chat message', async (data) => {
    const message = new Message(data);
    await message.save();
    io.emit('chat message', data);
  });
});

// REST endpoint for fetching messages
app.get('/messages', async (req, res) => {
  const messages = await Message.find().sort({ timestamp: 1 });
  res.json(messages);
});

server.listen(5000, () => console.log('Server running on port 5000'));
