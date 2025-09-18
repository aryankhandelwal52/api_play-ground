import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  github: String,
  linkedin: String,
  portfolio: String
});

const workSchema = new mongoose.Schema({
  title: String,
  description: String,
  skills: [String],
  links: linkSchema
});

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
   skills: [String],
  links: linkSchema
});

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: String,
  skills: [String],
  projects: [projectSchema],
  work: [workSchema],
  links: linkSchema
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
