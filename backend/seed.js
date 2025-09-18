import mongoose from "mongoose";
import dotenv from "dotenv";
import Profile from "./models/Profile.js";

dotenv.config();

const seedProfile = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("Connected to MongoDB");

    // Delete existing profile
    await Profile.deleteMany();

    // Create new profile data
    const profile = new Profile({
      name: "Aryan Khandelwal",
      email: "aryankhandelwal467@gmail.com",
      education: "Integrated Master of Science - Physics, SVNIT Surat (2021 – 2026) CGPA: 8.04",
      skills: [
        "HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB",
        "C", "C++", "MySQL", "Operating Systems", "DBMS", "Computer Networks", "OOPs Concepts"
      ],
     projects: [
  {
    title: "Real-Time Chat Application",
    description: "Developed a full-stack chat app using MERN stack, Zustand, and Socket.IO with real-time messaging, image sharing, and JWT-based authentication.",
    skills: ["React.js", "Node.js", "Socket.IO", "Zustand", "JWT", "MongoDB", "Express.js", "JavaScript", "HTML", "CSS"],
    links: {
      github: "https://github.com/aryankhandelwal52/SharChat",
      linkedin: "https://linkedin.com/in/aryan-khandelwal-5b4507233",
      portfolio: "https://aryan-portfolio.com/realtime-chat"
    }
  },
  {
    title: "AI Mentor-Based Peer Learning Platform",
    description: "Built a collaborative learning platform with skill-specific rooms, AI-powered topic explanations, mock quizzes, and progress tracking using MERN stack, OpenAI API, and Chart.js.",
    skills: ["React.js", "Node.js", "AI", "OpenAI API", "Chart.js", "JavaScript", "HTML", "CSS", "MongoDB", "Express.js"],
    links: {
      github: "https://github.com/aryankhandelwal52/SharChat",
      linkedin: "https://linkedin.com/in/aryan-khandelwal-5b4507233",
      portfolio: "https://aryan-portfolio.com/peer-learning"
    }
  },
  {
    title: "Pathfinding Algorithm Visualizer",
    description: "Created an interactive visualization tool using React.js to demonstrate Dijkstra’s and other graph algorithms with animations and real-time grid-based rendering.",
    skills: ["React.js", "JavaScript", "Dijkstra", "BFS", "DFS", "HTML", "CSS"],
    links: {
      github: "https://github.com/aryankhandelwal52/path-visualizer",
      linkedin: "https://linkedin.com/in/aryan-khandelwal-5b4507233",
      portfolio: "https://aryan-portfolio.com/pathfinding-visualizer"
    }
  }
],

work: [
  {
    title: "Real-Time Chat Application",
    description: "Built frontend in React.js, integrated Zustand for state management, and implemented real-time messaging with Socket.IO.",
    skills: ["React.js", "Node.js", "Socket.IO", "Zustand", "JavaScript", "HTML", "CSS"],
    links: {
      github: "https://github.com/aryankhandelwal52/SharChat",
      linkedin: "https://linkedin.com/in/aryan-khandelwal-5b4507233",
      portfolio: "https://aryan-portfolio.com/realtime-chat"
    }
  },
  {
    title: "AI Mentor-Based Peer Learning Platform",
    description: "Developed collaborative skill rooms in React.js, integrated OpenAI API for mentor features, and used Chart.js for progress visualization.",
    skills: ["React.js", "AI", "OpenAI API", "Chart.js", "JavaScript", "HTML", "CSS", "Node.js"],
    links: {
      github: "https://github.com/aryankhandelwal52/SharChat",
      linkedin: "https://linkedin.com/in/aryan-khandelwal-5b4507233",
      portfolio: "https://aryan-portfolio.com/peer-learning"
    }
  },
  {
    title: "Pathfinding Algorithm Visualizer",
    description: "Designed interactive grid UI in React.js and implemented BFS, DFS, and Dijkstra’s algorithm animations.",
    skills: ["React.js", "JavaScript", "Dijkstra", "BFS", "DFS", "HTML", "CSS"],
    links: {
      github: "https://github.com/aryankhandelwal52/path-visualizer",
      linkedin: "https://linkedin.com/in/aryan-khandelwal-5b4507233",
      portfolio: "https://aryan-portfolio.com/pathfinding-visualizer"
    }
  }
],

      links: {
        github: "https://github.com/aryankhandelwal52",
        linkedin: "https://linkedin.com/in/aryan-khandelwal-5b4507233",
        portfolio: "https://aryan-portfolio.com"
      }
    });

    await profile.save();
    console.log("Profile seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedProfile();
