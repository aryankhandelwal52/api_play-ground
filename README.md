Me-API Playground 🚀

A simple MERN stack project that stores my own profile information in MongoDB and exposes it via a REST API with a minimal React + Vite frontend for querying.

This project was built as part of a backend assessment.

🌐 Live URLs

Frontend (React + Vite + Tailwind): https://api-play-ground-2.onrender.com/

Backend (Express + MongoDB): https://api-play-ground-1.onrender.com/

🏗 Architecture

Frontend: React + Vite + TailwindCSS

Backend: Node.js + Express

Database: MongoDB Atlas (NoSQL)

Hosting: Render (Backend API) + Render/Vercel (Frontend)

⚙️ Setup Instructions
Local Development
Backend
cd backend
npm install


Create .env file:

MONGO_URI=your-mongodb-atlas-uri
PORT=5000


Seed DB with profile data:

npm run seed


Start server:

npm run dev


API runs at http://localhost:5000/profile

Frontend
cd frontend
npm install


Create .env file:

VITE_API_BASE=http://localhost:5000/profile


Run frontend:

npm run dev


Frontend runs at http://localhost:5173

Production Deployment

Backend: Deployed on Render as a Web Service (root = backend/)

Build: npm install

Start: node server.js

Frontend: Deployed on Render/Vercel as a Static Site (root = frontend/)

Build: npm install && npm run build

Output: dist

🗄 Database Schema
Profile
{
  name: String,
  email: String,
  education: String,
  skills: [String],
  projects: [
    { title: String, description: String, links: { github, linkedin, portfolio } }
  ],
  work: [
    { title: String, description: String, links: { github, linkedin, portfolio } }
  ],
  links: { github, linkedin, portfolio }
}

📡 API Endpoints
Health Check
GET /profile/health
→ 200 OK { status: "OK" }

Profile
GET /profile
POST /profile

Projects
GET /profile/projects?skill=react

Skills
GET /profile/skills/top
GET /profile/skills?q=rea

Search
GET /profile/search?q=react

📑 Example Requests
cURL
curl http://localhost:5000/profile
curl http://localhost:5000/profile/skills?q=react
curl http://localhost:5000/profile/search?q=AI

Postman

A sample Postman collection is included:
postman_collection.json

✅ Acceptance Criteria

GET /profile/health returns 200 ✔

Queries return correct filtered results ✔

Seed data is visible via UI ✔

README is complete and reproducible ✔

URLs load without errors ✔

💡 Nice-to-have (Optional Work)

Basic auth for write operations

Logging & request tracing

Simple pagination for projects/work

Continuous Integration setup

📄 Resume https://drive.google.com/drive/u/0/my-drive
