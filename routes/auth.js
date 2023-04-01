const router = require('express').Router();
const User = require('../models/Users')

//POST /auth/register - REGISTER new User
router.get('/register', async (req, res) => {
    const user = await new User({
        username: "turtle2",
        email: "turtle@gmail.com",
        password: "123456"
    })

    await user.save()
    res.send(user)
 })

module.exports = router;