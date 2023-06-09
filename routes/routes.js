const { Router } = require('express')
const { home, login, signup, shop, sproducts, blog, contact,about, signuppost, loginauth } = require('../controllers/usercontroller')
const router = Router()
const passport = require('passport')
router.get("/", home)
router.get('/login', login)
Router.post('/login', passport.authenticate('local', { failureRedirect: '/login'  }) ,loginauth);
router.get('/signup', signup)
router.post('/signup', signuppost)
router.get('/shop', shop)
router.get('/sproducts', sproducts)
router.get('/blog', blog)
router.get('/contact', contact)
router.get('/about', about)

module.exports = router