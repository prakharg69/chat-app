import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-route.js";
import messageRoutes from "./routes/messageRoutes-route.js";
import { connection } from "./lib/db.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import cors from "cors";

dotenv.config();

const app = express();

// ==========================
// Middleware
// ==========================
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// ==========================
// Test Route
// ==========================
app.get("/hii", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ token, message: "Token is valid", payload: decoded });
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
});

// ==========================
// Main Routes
// ==========================
app.use("/", authRoutes);
app.use("/message", messageRoutes);

// ==========================
// Server Listen
// ==========================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`🚀 Server running at http://localhost:${PORT}`);
  connection();
});
