const productsRouter = require('express').Router()
const Product = require('../models/product')

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

productsRouter.post('/', async (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    stock: req.body.stock,
    price: req.body.price
  })

  try {
    const savedProduct = await newProduct.save()
    return res.status(201).json(savedProduct)
  } catch (e) {
    return res.status(400).json({
      error: e.message
    })
  }
})

productsRouter.delete('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product)
    return res.status(404).end()

  await Product.deleteOne(product)
  return res.status(204).end()
})

module.exports = productsRouter