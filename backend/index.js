const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.json('Hello!')
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})