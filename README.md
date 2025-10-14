ChatLiveApp is a real-time chat application that allows users to communicate instantly in a seamless, user-friendly interface. Built with a modern React frontend and Node.js/Express backend, it provides a complete end-to-end messaging experience.

Features

Real-time Messaging – Messages are sent and received instantly using WebSocket or similar real-time technology.

User Authentication – Secure login and signup with JWT tokens.

Profile Management – Users can update their profiles and upload a profile picture.

Cloud Storage – Image uploads are handled via Cloudinary.

Responsive Design – Works perfectly on both desktop and mobile devices.

Persistent Database – Chat history and user data are stored in MongoDB.

Technologies Used

Frontend: React, TailwindCSS

Backend: Node.js, Express

Database: MongoDB

Storage & Media: Cloudinary

Authentication: JWT (JSON Web Tokens)

Hosting: Vercel

Installation
Frontend
cd client
npm install
npm start

Backend
cd server
npm install
npm start


Make sure to create a .env file in the backend folder with your own secrets and API keys.

Environment Variables (example)
MONGODB_URI=XXXX
PORT=3000
JWT_SECRET=XXXX
CLOUDINARY_CLOUD_NAME=XXXX
CLOUDINARY_API_KEY=XXXX
CLOUDINARY_API_SECRET=XXXX

Project Structure
chatliveapp/
├── client/           # Frontend React app
├── server/           # Backend Express API
├── README.md         # This file
└── .gitignore        # Ignored files

Deployment

Frontend and backend are hosted on Vercel.

MongoDB Atlas is used for database hosting.

Cloudinary manages image uploads.

Contributing

This project is open-source. Feel free to open issues or pull requests. Please do not commit sensitive information (API keys, database URIs, etc.).
