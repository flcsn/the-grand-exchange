const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

usersRouter.get('/', async (req, res) => {
  const users = await User.find({})
  return res.json(users)
})

usersRouter.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: bcrypt.hash(req.body.password, 10),
    emailAddress: req.body.emailAddress
  })

  const savedUser = await user.save()

  res.json(savedUser)
})

module.exports = usersRouter