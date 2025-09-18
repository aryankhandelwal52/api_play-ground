import { useEffect, useState } from "react";
import api from "./api";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Search from "./components/Search";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get("/").then(res => setProfile(res.data)).catch(err => console.error(err));
  }, []);

  if (!profile) {
    return <div className="text-center mt-20 text-gray-600 text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <header className="bg-white shadow-md fixed top-0 w-full z-10 p-4 flex justify-center">
        <h1 className="text-2xl font-bold text-indigo-600">Me-API Playground</h1>
      </header>
      
      <div className="pt-20 max-w-3xl mx-auto">
        <Profile profile={profile} />
        <Skills skills={profile.skills} />
        <Projects projects={profile.projects} />
        <Search />
      </div>
    </div>
  );
}

export default App;
