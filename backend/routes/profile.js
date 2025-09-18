import express from "express";
import Profile from "../models/Profile.js";

const router = express.Router();

// Create or update profile
router.post("/", async (req, res) => {
  try {
    const q = req.query.q ? req.query.q.toLowerCase() : "";
    let profile = await Profile.findOne();
    if (profile) {
      profile.set(req.body);
    } else {
      profile = new Profile(req.body);
    }
        const matchedSkills = profile.skills.filter(skill =>
      skill.toLowerCase().includes(q)
    );
     res.json(matchedSkills);
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get profile
router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Query projects by skill
router.get("/projects", async (req, res) => {
  try {
    const skill = req.query.skill;
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    const projects = profile.projects.filter(project =>
      project.description.toLowerCase().includes(skill.toLowerCase()) ||
      project.title.toLowerCase().includes(skill.toLowerCase())
    );
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Get skills filtered by query
router.get("/skills", async (req, res) => {
  try {
    const q = req.query.q ? req.query.q.toLowerCase() : "";
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    const matchedSkills = profile.skills.filter(skill =>
      skill.toLowerCase().includes(q)
    );

    res.json(matchedSkills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get top skills
router.get("/skills/top", async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    const skills = profile.skills;
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search endpoint
router.get("/search", async (req, res) => {
  try {
    const q = req.query.q ? req.query.q.toLowerCase() : "";
    const profile = await Profile.findOne();
    if (!profile) return res.json({ projects: [], works: [] });

    // Filter projects and work by skills
    const projects = profile.projects.filter(project =>
      project.skills?.some(skill => skill.toLowerCase() === q)
    );

    const works = profile.work.filter(work =>
      work.skills?.some(skill => skill.toLowerCase() === q)
    );

    res.json({ projects, works });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Health check
router.get("/health", (req, res) => {
  res.status(200).send("OK");
});

export default router;
