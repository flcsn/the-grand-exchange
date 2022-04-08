const productsRouter = require('express').Router()
const Product = require('../models/product')
const User = require('../models/user')
const multer = require('multer')
const { tokenExtractor, userExtractor } = require('../utils/middleware')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../utils/config')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('file is not a JPEG or PNG file'), false)
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
})

productsRouter.get('/', async (req, res) => {
  const products = await Product.find({})
    .populate('owner', {
      id: 1,
      username: 1
    })
  return res.json(products)
})

productsRouter.get('/search', async (req, res) => {
  const products = await Product.find({
    title: { $regex: `.*${req.query.title}.*` } })
    .populate('owner', {
      id: 1,
      username: 1
    })
  return res.json(products)
})

productsRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product)
    return res.status(404).json({
      error: 'product not found'
    })

  return res.json(product)
})

productsRouter.post('/', tokenExtractor, userExtractor, upload.single('image'), async (req, res) => {
  // Windows saves files with back slashes \ instead of forward slashes /
  const p = req.file.path
  const fixedPath = p.replace(/\\/g, '/')
  const user = await User.findById(req.user)

  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    stock: req.body.stock,
    price: req.body.price,
    image: {
      data: fs.readFileSync(fixedPath),
      contentType: 'image/png'
    },
    owner: user.id
  })

  try {
    const savedProduct = await newProduct.save()
    user.products = user.products.concat(savedProduct.id)
    console.log('user products', user.products)
    await user.save()
    return res.status(201).json(savedProduct)
  } catch (e) {
    return res.status(400).json({
      error: e.message
    })
  }
})

productsRouter.delete('/', async (req, res) => {
  await Product.deleteMany({})
  return res.status(204).end()
})

productsRouter.delete('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product)
    return res.status(404).end()

  await Product.deleteOne(product)
  return res.status(204).end()
})

productsRouter.put('/:id/buy', tokenExtractor, async (req, res) => {
  const token = req.token
  let userCustomer = null
  if (token) {
    const decodedToken = jwt.verify(token, JWT_SECRET)
    if (!decodedToken) {
      return res.status(401).json({
        message: 'invalid token'
      })
    }

    userCustomer = await User.findById(decodedToken.id)
  }

  const product = await Product.findById(req.params.id)
  if (!product)
    return res.status(404).json({
      'message': 'product not found'
    })

  const ownerOfProduct = await User.findById(product.owner)
  const quantity = req.body.quantity
  const totalPrice = product.price * quantity

  if (product.stock < quantity) {
    return res.status(400).json({
      'message': 'not enough stock'
    })
  }

  if (userCustomer && userCustomer.funds < totalPrice) {
    return res.status(400).json({
      'message': 'user does not have enough funds'
    })
  }

  product.stock -= quantity
  ownerOfProduct.funds += totalPrice

  if (userCustomer) {
    userCustomer.funds -= totalPrice
  }

  // possible source of error; how do we revert changes
  // if any of the next three save calls fail?
  try {
    await product.save()
    await ownerOfProduct.save()
    if (userCustomer) await userCustomer.save()
    return res.status(200).end()
  } catch (e) {
    console.log(e)
    return res.status(400).end()
  }
})

module.exports = productsRouter