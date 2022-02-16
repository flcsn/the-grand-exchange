const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')

const api = supertest(app)

beforeAll(async () => {
  await User.deleteMany({})
}, 20000)

describe('new users', () => {
  afterEach(async () => {
    await User.deleteMany({})
  })

  test('can be created with fresh info', async () => {
    const data = {
      username: 'testUser',
      password: 'testPassword',
      emailAddress: 'testAddress@email.com'
    }

    await api.post('/users')
      .send(data)
      .expect(201)

    const response = await api.get('/users')
    const users = response.body
    expect(users).toHaveLength(1)
    expect(users[0].username).toBe('testUser')
  }, 20000)

  describe('cannot be created if', () => {
    beforeEach(async () => {
      const data = {
        username: 'testUser',
        password: 'testPassword',
        emailAddress: 'testAddress@email.com'
      }

      await api.post('/users')
        .send(data)
        .expect(201)
    })

    test('username already exists', async () => {
      const duplicateUser = {
        username: 'testUser',
        password: 'testPassword2',
        emailAddress: 'testAddress2@email.com'
      }

      await api.post('/users')
        .send(duplicateUser)
        .expect(400)

      const response = await api.get('/users')
      const users = response.body
      expect(users).toHaveLength(1)
    }, 20000)

    test('username is less than 3 characters', async () => {
      const shortUser = {
        username: 'u',
        password: 'testPassword2',
        emailAddress: 'testAddress2@email.com'
      }

      await api.post('/users')
        .send(shortUser)
        .expect(400)

      const response = await api.get('/users')
      const users = response.body
      expect(users).toHaveLength(1)
    }, 20000)

    test('email already exists', async () => {
      const duplicateEmail = {
        username: 'testUser2',
        password: 'testPassword2',
        emailAddress: 'testAddress@email.com'
      }

      await api.post('/users')
        .send(duplicateEmail)
        .expect(400)

      const response = await api.get('/users')
      const users = response.body
      expect(users).toHaveLength(1)
    }, 20000)
  }, 20000)
})

afterAll(() => {
  mongoose.connection.close()
})