let express = require('express');
let router = express.Router();
let {users}= require('../models/users');

//localhost:3000/api/emp/register
router.post("/register",async(req,res)=>{
    console.log(req.body);
    let newUser =users(req.body);
    let result=await newUser.save();
    res.send(result);
})

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    if(typeof email!=="string"||typeof password!=="string"||!email||!password){
        return res.status(400).json({message:"Email and password are required"});
    }

    try{
        const user=await users.findOne({email});
        if(!user||user.password!==password){
            return res.status(401).json({message:"Invalid email or password"});
        }

        return res.json({
            message:"Login successful",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            }
        });
    }catch(error){
        console.error("Login failed:",error);
        return res.status(500).json({message:"Unable to log in. Please try again."});
    }
})

router.get("/view task",(req,res)=>{
    res.send("view task page called");
})

router.put("/updatestatus",(req,res)=>{
    res.send("update status page called");
})

module.exports = router;