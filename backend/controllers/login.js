const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../utils/config')
const User = require('../models/user')

loginRouter.post('/', async (req, res) => {
  const user = await User.findOne({ username: req.body.username }).select('+passwordHash')

  if (!user) {
    return res.status(404).json({
      error: 'user not found'
    })
  }

  const passwordCorrect = await bcrypt.compare(req.body.password, user.passwordHash)

  if (!passwordCorrect) {
    return res.status(401).json({
      error: 'incorrect password'
    })
  }

  const userForToken = {
    id: user.id,
    username: user.username
  }

  const token = jwt.sign(userForToken, JWT_SECRET)

  return res.status(200).json({
    token,
    username: user.username,
    emailAddress: user.emailAddress,
    funds: user.funds
  })
})

module.exports = loginRouter