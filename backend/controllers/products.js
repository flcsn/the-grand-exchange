const productsRouter = require('express').Router()
const Product = require('../models/product')
const User = require('../models/user')
const multer = require('multer')
const { tokenExtractor, userExtractor } = require('../utils/middleware')

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
  const path = req.file.path
  const fixedPath = path.replace(/\\/g, '/')
  const user = await User.findById(req.user)
  console.log('user is', user.id)
  console.log(user.products)

  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    stock: req.body.stock,
    price: req.body.price,
    image: fixedPath,
    owner: user.id
  })

  try {
    const savedProduct = await newProduct.save()
    user.products.push(savedProduct.id)
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

module.exports = productsRouter