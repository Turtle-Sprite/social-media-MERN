const router = require('express').Router();

//updatet user
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
            
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).json("You can update only your account")
        }
}

//delete user

//get a user

//follow a user

//unfollow a user

module.exports = router;