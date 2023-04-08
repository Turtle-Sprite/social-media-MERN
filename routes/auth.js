const router = require('express').Router();
const User = require('../models/Users')
const bcrypt = require('bcrypt')

//POST api/auth/register - REGISTER new User
router.get('/register', async (req, res) => {
    const user = await new User({
        username: "turtle2",
        email: "turtle@gmail.com",
        password: "123456"
    })

    await user.save()
    res.send(user)
 })

 //POST api/auth/register - REGISTER new User
router.post('/register', async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

          //create new user
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        //save user and respond
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch(error) {
        console.log(error, "register post route")
    }

 })

 //POST api/auth/login - LOGIN User
 router.post('/login', async (req, res) => {
    try {
    const user = await User.findOne({email: req.body.email})
    !user && res.status(404).json("user not found")

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
    } catch(error) {
        console.log(error, "login post route")
    }
 })

module.exports = router;