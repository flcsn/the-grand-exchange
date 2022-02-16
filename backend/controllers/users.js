const usersRouter = require('express').Router()

usersRouter.get('/', (req, res) => {
  return res.json('users')
})

module.exports = usersRouter