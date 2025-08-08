import express from 'express';
import {login,logout,checkAuth,updatedProfile,signup} from "../controller/auth-controller.js"
import {protectRoute} from "../middleware/protectRoute.js"
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();
router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)
router.put('/update-profile',upload.single("profilePic"),protectRoute,updatedProfile);


router.get("/check" ,protectRoute,checkAuth);


export default router;