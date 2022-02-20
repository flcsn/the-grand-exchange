import userService from '../services/users'
import productService from '../services/products'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.data
    case 'REGISTRATION_SUCCESS':
      return action.data
    case 'GOT_USER_FROM_LOCAL':
      return action.data
    case 'LOGIN_FAIL':
      return state
    case 'REGISTRATION_FAIL':
      return state
    case 'LOG_OUT':
      return null
    default:
      return state
  }
}

export const login = (username, password) => {
  return async dispatch => {
    try {
      const user = await userService.login(username, password)
      window.localStorage.setItem('the-grand-exchange-user', JSON.stringify(user))
      productService.extractToken(user)
      dispatch({
        type: 'LOGIN_SUCCESS',
        data: user
      })
    } catch (e) {
      console.log('error:', e.message)
      dispatch({
        type: 'LOGIN_FAIL'
      })
    }
  }
}

export const register = (username, password, emailAddress) => {
  return async dispatch => {
    try {
      await userService.register(username, password, emailAddress)
      const loginUser = await userService.login(username, password)
      window.localStorage.setItem('the-grand-exchange-user', JSON.stringify(loginUser))
      productService.extractToken(loginUser)
      dispatch({
        type: 'REGISTRATION_SUCCESS',
        data: loginUser
      })
    } catch (e) {
      console.log('error:', e.message)
      dispatch({
        type: 'REGISTRATION_FAIL'
      })
    }
  }
}

export const saveUserFromLocalStorage = (user) => {
  return async dispatch => {
    window.localStorage.setItem('the-grand-exchange-user', JSON.stringify(user))
    productService.extractToken(user)
    dispatch({
      type: 'GOT_USER_FROM_LOCAL',
      data: user
    })
  }
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.removeItem('the-grand-exchange-user')
    productService.removeToken()
    dispatch({
      type: 'LOG_OUT'
    })
  }
}

export default userReducer


