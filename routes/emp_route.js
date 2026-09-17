let express = require('express');
let router = express.Router();
let {users}= require('../models/users');

//localhost:3000/api/emp/register
router.post("/register",async(req,res)=>{
    console.log(req.body);
    let newUser =users(req.body);
    let result=await newuser.save();
    res.send(result);
})

router.post("/login",(req,res)=>{
    res.send("login page called");
})

router.get("/view task",(req,res)=>{
    res.send("view task page called");
})

router.put("/updatestatus",(req,res)=>{
    res.send("update status page called");
})

module.exports = router;