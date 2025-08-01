import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-route.js";
import { connection } from "./lib/db.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
// Route
app.get("/hii", (req, res) => {
  const token = req.cookies.token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  res.json({ token, message: "Token is valid", payload: decoded });
  console.log(`Request received: ${req.method} ${req.url}`);
});
app.use("/", authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connection();
});
