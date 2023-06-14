const user = require("../models/userschema");

const home = (req, res) => {
    res.render('home');
};

const login = (req, res) => {
    res.render('login')
}
const signup =  (req, res) => {
    // let data = await user.create(req.body)
    // console.log("added successfully" + data.username)
    res.render('signup')
}

const signuppost = async (req, res) => {
    let data = await user.create(req.body)
    res.render('home')
}
const shop = (req, res) => {
    res.render('shop');
}
const sproducts = (req, res) => {
    res.render('sproducts');
}
const blog = (req, res) => {
    res.render('blog');
}
const contact = (req, res) => {
    res.render('contact');
}
const about = (req, res) => {
    res.render('about')
}
module.exports = { home, login, signup, shop, sproducts, blog, contact, about , signuppost}