import axios from 'axios'

const usersBaseURL = 'http://localhost:3001/users'
const loginBaseURL = 'http://localhost:3001/login'

const register = async (username, password, emailAddress) => {
  const newUser = { username, password, emailAddress }

  const result = await axios.post(usersBaseURL, newUser)
  return result.data
}

const login = async (username, password) => {
  const credentials = { username, password }

  const result = await axios.post(loginBaseURL, credentials)
  return result.data
}

const addFunds = async (amount, user) => {
  const result = await axios.put(`${usersBaseURL}/add/funds`, { amount }, {
    headers: {
      Authorization: `bearer ${user.token}`
    }
  })
  return result.data
}

export default { register, login, addFunds }