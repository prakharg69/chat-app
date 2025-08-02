import jwt from "jsonwebtoken";
import User from "../modules/user-module.js";

export const protectRoute = async (req, res, next) => {
  try {
    // 🍪 Get token from cookies
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Token missing ",
      });
    }

    // 🔍 Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Invalid token",
      });
    }

    // 👤 Get user from DB without password
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found ",
      });
    }

    // ✅ Attach user to request
    req.user = user;
    next(); // 🔓 Let the  route continue

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error ",
      error: error.message,
    });
  }
};
