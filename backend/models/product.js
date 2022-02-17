const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { MONGODB_URI } = require('../utils/config')

mongoose.connect(MONGODB_URI)
  .then(console.log('successfully connected to database'))
  .catch(e => {
    console.log(`error connecting to database: ${e.message}`)
  })

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    min: [0, 'Cannot have negative stock'],
    required: true
  },
  price: {
    type: Number,
    min: [1, 'Cannot have price less than 1'],
    required: true
  },
  image: {
    type: String
  }
})

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

productSchema.plugin(uniqueValidator)

module.exports = new mongoose.model('Product', productSchema)
