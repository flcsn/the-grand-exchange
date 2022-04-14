const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const { tokenExtractor, userExtractor } = require('../utils/middleware')

usersRouter.get('/', async (req, res) => {
  const users = await User.find({})
    .populate('products', {
      id: 1,
      title: 1
    })
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
  if (!user)
    return res.status(404).end()

  await User.deleteOne(user)
  return res.status(204).end()
})

usersRouter.put('/add/funds', tokenExtractor, userExtractor, async (req, res) => {
  const userToUpdate = await User.findById(req.user)

  console.log('user', userToUpdate)
  console.log('req body', req.body)
  console.log('funds to add', req.body.amount)

  userToUpdate.funds = userToUpdate.funds + Number(req.body.amount)

  try {
    const updatedUser = await userToUpdate.save()
    return res.status(200).json(updatedUser)
  } catch (e) {
    console.log(e)
    return res.status(400).end()
  }
})

module.exports = usersRouter