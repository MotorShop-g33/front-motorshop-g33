import axios from "axios";

const token: string | null = localStorage.getItem("@token:token");

export const api = axios.create({
  baseURL: "https://motorshopg33v2.onrender.com/",
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
