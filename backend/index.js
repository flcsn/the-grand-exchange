const { PORT } = require('./utils/config')
const app = require('./app')

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})