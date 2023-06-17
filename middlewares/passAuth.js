const bcrypt = require('bcrypt');
const user = require('../models/userschema');
const user = require('../models/userschema');

const loclalstrtegy =require('passport-local').Strategy
let localAuth =(passport)=>{
    passport.use(new loclalstrtegy( async(username, password, done)=>{
        try {
            let user = await user.findOne({username:username})
        if(!user){
            return done(null, false)
        }
        let bcryptpassword = user.password
        let bcryptUser = await bcrypt.compare(password, bcryptpassword)
        if(!bcryptUser){
            return done(null, false)
        }
        return done(null, user)
        } catch (error) {
            return done(error, false)
        }
    }))
    passport.serializeUser((User, done)=> {
        return done(null, User.id); 
     });
     
     passport.deserializeUser((id, done)=> {
         let User = user.findById(id)
         return done(null, User);
     });
}
module.exports = localAuth