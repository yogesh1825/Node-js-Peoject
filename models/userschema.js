const mongoose  = require("mongoose");
let userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: {type:String},
});

let user=mongoose.model('User',userSchema)
module.exports=user