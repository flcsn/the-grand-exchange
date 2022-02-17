const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Product = require('../models/product')

const api = supertest(app)

beforeAll(async () => {
  await Product.deleteMany({})
}, 20000)

describe('Products', () => {
  test('can be created', async () => {
    const productData = {
      title: 'test product',
      description: 'test description',
      stock: 1,
      price: 10
    }

    await api.post('/products')
      .send(productData)
      .expect(201)

    const response = await api.get('/products')
    const products = response.body
    expect(products).toHaveLength(1)
    expect(products[0].title).toBe('test product')
  }),

  describe('cannot be created', () => {
    beforeAll(async () => {
      await Product.deleteMany({})
    }, 20000)

    test('with empty title and description', async () => {
      const emptyData = {
        title: '',
        description: '',
        stock: 10,
        price: 10
      }

      await api.post('/products')
        .send(emptyData)
        .expect(400)

      const response = await api.get('/products')
      const products = response.body
      expect(products).toHaveLength(0)
    })

    test('with negative stock', async () => {
      const negativeStock = {
        title: 'test product',
        description: 'test description',
        stock: -1,
        price: 10
      }

      await api.post('/products')
        .send(negativeStock)
        .expect(400)

      const response = await api.get('/products')
      const products = response.body
      expect(products).toHaveLength(0)
    })

    test('with price lower than 1', async () => {
      const zeroPrice = {
        title: 'test product',
        description: 'test description',
        stock: 10,
        price: 0
      }

      await api.post('/products')
        .send(zeroPrice)
        .expect(400)

      const response = await api.get('/products')
      const products = response.body
      expect(products).toHaveLength(0)
    })
  })
})

afterAll(done => {
  mongoose.connection.close()
  done()
})