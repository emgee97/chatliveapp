# 💬 ChatLiveApp

**ChatLiveApp** is a modern, real-time messaging web application built with **React**, **Node.js**, **MongoDB**, and **Socket.io** — allowing users to connect instantly, exchange text and images, and customize their profile.  
It’s designed to be clean, fast, and intuitive — a full-stack social communication experience hosted on **Vercel**.

---

## 🚀 Features

### 👥 User Management
- **Signup / Login** with secure JWT authentication  
- **Profile customization** (name, bio, and profile picture upload via Cloudinary)  
- **Editable user profiles** that update instantly  

### 💬 Real-Time Chat
- **Instant messaging** using Socket.io for live conversations  
- **Image sharing** inside chat conversations  
- **Message seen indicator** to know when a message has been viewed  
- **Unread message counter** in sidebar  

### 🖼️ Media & Cloud
- **Cloudinary integration** for safe and optimized image uploads  
- **Dynamic avatars and logos** displayed across the app  

### 🎨 Clean, Modern UI
- Built with **React + TailwindCSS**  
- Responsive and minimal interface  
- Animated transitions and rounded visuals  

### ⚙️ Architecture
- **Frontend:** React + Context API for state management  
- **Backend:** Node.js + Express + MongoDB + Mongoose  
- **Real-time communication:** Socket.io  
- **Cloud hosting:** Vercel (frontend) & external Node.js hosting (e.g., Render / Railway / O2Switch)  
- **Media storage:** Cloudinary  

---

## 🧠 How It Works

1. Users register or log in securely.  
2. On login, the app establishes a **WebSocket connection** with the server.  
3. All connected users appear in the **sidebar**, with badges showing unread messages.  
4. Users can send **text and image messages** — instantly synced between both clients.  
5. **Profile updates** are uploaded to **Cloudinary**, and the image URL is saved in MongoDB.  
6. When a message is read, it’s marked as **seen** in real time.  

---

## ⚡ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React, Vite, TailwindCSS |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose) |
| Real-time | Socket.io |
| Auth | JWT |
| Media | Cloudinary |
| Deployment | Vercel / Render |
| Hosting | O2Switch (domain), Vercel (frontend) |

---

## 🛠️ Setup (for developers)

### 1️⃣ Clone the project
```bash
git clone https://github.com/emgee97/chatliveapp.git
cd chatliveapp
