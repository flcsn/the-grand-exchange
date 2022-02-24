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

usersRouter.put('/:id/add/funds', tokenExtractor, userExtractor, async (req, res) => {
  if (req.user !== req.params.id) {
    console.log('req.user is ', req.user)
    console.log('req.params.id is', req.params.id)
    return res.status(401).json({
      'message': 'users may only add to their wallets while logged in'
    })
  }

  const userToUpdate = await User.findById(req.params.id)

  console.log('user', userToUpdate)
  console.log('funds to add', req.body.funds)

  userToUpdate.funds = userToUpdate.funds + req.body.funds

  try {
    const updatedUser = await userToUpdate.save()
    return res.status(200).json(updatedUser)
  } catch (e) {
    console.log(e)
    return res.status(400).end()
  }
})

module.exports = usersRouter