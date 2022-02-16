const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const { PORT } = require('./utils/config')
const app = express()

const usersRouter = require('./controllers/users')

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use('/users', usersRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})