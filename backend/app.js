const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const productsRouter = require('./controllers/products')

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/uploads', express.static('uploads'))
app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/products', productsRouter)

module.exports = app