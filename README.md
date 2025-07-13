# -Real-Time-Chat-App

1.How to Run
Start MongoDB (make sure it’s running locally).

Start the backend:

#2. In chat-app folder
node server.js
Start the frontend:

# 3.In chat-app/client folder
npm start
Open http://localhost:3000 in your browser.

4. README.md (Copy and use)
# Real-Time Chat Application

A simple real-time chat web application built with **React.js**, **Node.js**, **Socket.io**, and **MongoDB**.

## Features

- Live chat messaging (Socket.io)
- User identification (enter your name before chatting)
- View chat history (MongoDB)
- Real-time updates (messages appear instantly for all users)
- Simple and clean UI

## Getting Started

### 1. Clone the repository

git clone https://github.com/yourusername/chat-app.git
cd chat-app

### 2. Set up the backend

npm install
node server.js


- Make sure MongoDB is running locally (or update the MongoDB URI in `server.js` if using a cloud database).

### 3. Set up the frontend

cd client
npm install
npm start

- The frontend will run at [http://localhost:3000](http://localhost:3000).

## Folder Structure

chat-app/
server.js
package.json
client/
src/
App.js
index.js
package.json

## Future Improvements

- Add authentication (sign up/login)
- Support for group chats or private messages
- Message notifications
- File/image sharing
- Responsive/mobile-friendly design


**Enjoy chatting in real time!**
