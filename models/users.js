let mongoose=require('mongoose');
let userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String
})

let userModel=mongoose.model('users',userSchema);
module.exports={users:userModel};