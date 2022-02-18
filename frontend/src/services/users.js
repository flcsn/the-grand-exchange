import axios from 'axios'

const usersBaseURL = 'https://localhost:3001/users'
const loginBaseURL = 'https://localhost:3001/login'

const register = async (username, password, email) => {
  const newUser = { username, password, email }

  const result = await axios.post(usersBaseURL, newUser)
  return result.data
}

const login = async (username, password) => {
  const credentials = { username, password }

  const result = await axios.post(loginBaseURL, credentials)
  return result.data
}

export default { register, login }