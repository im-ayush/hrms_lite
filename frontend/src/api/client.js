import axios from "axios";

export default axios.create({
  baseURL: "https://hrms-lite-lizn.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
