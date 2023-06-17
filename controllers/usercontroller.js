const user = require("../models/userschema");
const bcrypt = require('bcrypt');

const home = (req, res) => {
    res.render('home');
};

const login = (req, res) => {
    res.render('login')
}
const loginauth = (req, res) => {
    res.render('home')
}
const signup = (req, res) => {
    res.render('signup')
}

const signuppost = async (req, res) => {
    bcrypt.hash(req.body.password, 10, async function (err, hash) {
        if (err) {
            console.log(err);
        }
        else {
            req.body.password = hash
            await user.create(req.body)
            return res.render('home')
        }
    });
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
module.exports = { home, login, signup, shop, sproducts, blog, contact, about, signuppost,loginauth }