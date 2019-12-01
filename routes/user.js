const express = require('express')
const router = express.Router();
const User = require('../modals/User')


//get value
router.get('/', async (req, res) => {
    try {
        const userGet = await User.find()
        res.json(userGet)
    } catch (error) {
        res.json({ message: error })
    }
})

//post value
router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        description: req.body.description
    })
    try {
        const userPost = await user.save()
        res.json(userPost)
    } catch (error) {
        res.json({ message: error })
    }
})

//get specific user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.json({ message: error })
    }
})

//delete specific user
router.delete('/:id', async (req, res) => {
    try {
        const userDeleted = await User.findByIdAndDelete({ _id: req.params.id })
        res.json(userDeleted)
    } catch (error) {
        res.json({ message: error })
    }
})

//update specific user
router.patch('/:id', async (req, res) => {
    try {
        const userUpdate = await User.findByIdAndUpdate(
            {
                _id: req.params.id
            },
            {
                $set: {
                    username: req.body.username,
                    description: req.body.description
                }
            })
        res.json(userUpdate)
    } catch (error) {
        res.json({ message: error })
    }
})
module.exports = router;