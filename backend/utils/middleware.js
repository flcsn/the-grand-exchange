const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../utils/config')

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization')
  let token = ''
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    token = authorization.substring(7)
  } else token = null

  req.token = token
  next()
}

const userExtractor = (req, res, next) => {
  const token = req.token
  if (!token) {
    return res.status(401).json({
      message: 'missing token'
    })
  }

  const decodedToken = jwt.verify(token, JWT_SECRET)
  if (!decodedToken) {
    return res.status(401).json({
      message: 'invalid token'
    })
  }

  req.user = decodedToken.id
  next()
}

module.exports = {
  tokenExtractor,
  userExtractor,
}