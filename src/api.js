import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});

// ✅ Automatically add JWT to each request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // ✅ Add 'Bearer '
  }
  return config;
});

export default api;
