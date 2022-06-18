const express = require('express');
const router = express.Router();

var user_controller = require('../controller/user');

router.get("/",(req,res)=>{
    res.send("My App")
});
router.post("/login",user_controller.user_create);

router.post("/register",user_controller.user_create);
router.get("/register",(req,res)=>{
    res.send("My App")
});
module.exports = router