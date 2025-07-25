import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-route.js"

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route
app.get("/", (req, res) => {
  res.send("jbaha");
  console.log(`Request received: ${req.method} ${req.url}`);
});
app.use("/",authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


