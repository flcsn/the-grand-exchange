const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { isEmail } = require('validator')
const { MONGODB_URI } = require('../utils/config')

mongoose.connect(MONGODB_URI)
  .then(console.log('successfully connected to database'))
  .catch(e => {
    console.log(`error connecting to database: ${e.message}`)
  })

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true,
    select: false
  },
  emailAddress: {
    type: String,
    validate: [isEmail, 'invalid email address'],
    required: true,
    unique: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

userSchema.plugin(uniqueValidator)

module.exports = new mongoose.model('User', userSchema)
