# 💬 QuickChat - Real-Time Chat Application

QuickChat is a **real-time messaging platform** built using the **MERN stack** and **Socket.IO**.  
It enables users to chat instantly, share images, and enjoy a seamless messaging experience across devices.

---

## 🚀 Features

- **Real-Time Messaging**
  - Instant communication using Socket.IO
- **User Authentication**
  - JWT-based secure authentication
- **Media Sharing**
  - Upload and share images via Cloudinary
- **Responsive UI**
  - Optimized for both desktop and mobile devices
- **Dynamic Chat Features**
  - Typing indicators, chat updates without page reloads

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Vite
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas

**Real-Time Communication:**
- Socket.IO

**Media Storage:**
- Cloudinary

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/quickchat.git
   cd quickchat
2 **Install dependencies**

      npm install

3 **Set up environment variables**
Create a .env file in the root directory and add:

env

    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    CLOUDINARY_CLOUD_NAME=<your-cloud-name>
    CLOUDINARY_API_KEY=<your-api-key>
    CLOUDINARY_API_SECRET=<your-api-secret>

4 **Run the development server**

            npm run dev


## 📸 Screenshots

![Login Screenshot](./screenshots/Screenshot%202025-08-14%20at%2016.56.41.png)

![Homepage Screenshot](./screenshots/Screenshot%202025-08-14%20at%2015.45.27.png)

![Edit Profile Screenshot](./screenshots/Screenshot%202025-08-14%20at%2016.55.54.png)

## 🌐 Live Demo
  Visit: https://quick-chat-puce-seven.vercel.app/login

## 📜 License
This project is licensed under the MIT License — feel free to use and modify it.
