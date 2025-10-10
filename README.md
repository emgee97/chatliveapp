ChatLiveApp

ChatLiveApp is a full-stack web application for creating real-time chat rooms with advanced messaging and media management features. The project uses React (Front-end) and Node.js/Express (Back-end), deployed on Vercel.

🎯 Project Goal

ChatLiveApp aims to provide a modern, fast, and simple platform for real-time chatting, allowing users to share images and interact dynamically. The project also supports custom domain configuration.

💻 Tech Stack

Front-end: React, Tailwind CSS

Back-end: Node.js, Express

Database: MongoDB Atlas

Media Storage: Cloudinary

Deployment: Vercel

⚙️ Features
Front-end

Responsive modern interface

JWT-based authentication

Real-time messaging

Image upload and display

User profile management (avatar, username)

Back-end

Secure REST API with JWT

User and session management

MongoDB for storing messages and profiles

Secure Cloudinary uploads

Deployment

Custom domains (maximeguillaumin.com and chatliveapp.maximeguillaumin.com)

DNS configuration for Vercel

Automatic CI/CD from GitHub

⚠️ Security & Sensitive Files

For the public repository, all sensitive information has been replaced with placeholders (XXXX) in the .env file:

MONGODB_URI="XXXX"
JWT_SECRET="XXXX"
CLOUDINARY_API_KEY="XXXX"
CLOUDINARY_API_SECRET="XXXX"


⚠️ Never include real credentials in a public repo.

📦 Installation & Usage

Clone the repo:

git clone https://github.com/emgee97/chatliveapp-public.git
cd chatliveapp


Install dependencies for both front-end and back-end:

# Front-end
cd client
npm install

# Back-end
cd ../server
npm install


Create a .env file with your real credentials:

MONGODB_URI="your_mongodb_uri"
JWT_SECRET="your_jwt_secret"
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"


Run the project:

# Front-end
cd ../client
npm start

# Back-end
cd ../server
npm run dev


Access the app in your browser:

http://localhost:3000

🔗 Deployment

The project is deployed on Vercel:

Front-end: https://chatliveapp.vercel.app

Custom domain: https://chatliveapp.maximeguillaumin.com

📂 Project Structure
chatliveapp/
├─ client/         # React Front-end
├─ server/         # Node/Express Back-end
├─ .gitignore      # Ignore sensitive and temporary files
├─ README.md       # This file