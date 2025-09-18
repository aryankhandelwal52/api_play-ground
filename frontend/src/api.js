import axios from "axios";

const base = import.meta.env.VITE_API_BASE || "http://localhost:5000/profile";

const api = axios.create({
  baseURL: base
});

export default api;
