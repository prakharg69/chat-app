import axios from "axios";

export const axiosInstant = axios.create({
  baseURL: "http://localhost:3000", // no trailing slash is preferred
  withCredentials: true,
});
