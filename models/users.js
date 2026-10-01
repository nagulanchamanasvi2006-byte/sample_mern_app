let mongoose=require('mongoose');
let userSchema=mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    role:{
        type:String,
        enum:["HR","EMPLOYEE"]
    }
});

let userModel=mongoose.model('users',userSchema);
module.exports={users:userModel};