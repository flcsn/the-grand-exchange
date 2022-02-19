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
    passwordHash: await bcrypt.hash(req.body.password, 10),
    emailAddress: req.body.emailAddress
  })

  try {
    const savedUser = await user.save()
    return res.status(201).json(savedUser)
  } catch (e) {
    return res.status(400).json({
      error: e.message
    })
  }
})

usersRouter.delete('/', async (req, res) => {
  console.log(await User.deleteMany())

  return res.status(204).end()
})

usersRouter.delete('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  console.log(user)

  if (!user)
    return res.status(404).end()

  console.log(await User.deleteOne(user))
  return res.status(204).end()
})

module.exports = usersRouter