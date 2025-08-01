import express from 'express';
import {login,logout,updatedProfile,signup} from "../controller/auth-controller.js"
import {protectRoute} from "../middleware/protectRoute.js"
const router = express.Router();
router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)
router.put('/update-profile',protectRoute,updatedProfile);


export default router;