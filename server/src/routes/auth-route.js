import express from 'express';

const router = express.Router();
router.get('/signup',(req,res)=>{
    res.send("hemlo");
})
router.get('/login',(req,res)=>{
    res.send("hemlo");
})
router.get('/signin',(req,res)=>{
    res.send("hemlo");
})


export default router;