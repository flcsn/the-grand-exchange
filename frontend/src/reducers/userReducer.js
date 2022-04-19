import userService from '../services/users'
import productService from '../services/products'
import { setNotification } from './notificationReducer'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTRATION_SUCCESS':
    case 'GOT_USER_FROM_LOCAL':
    case 'UPDATE_SUCCESS':
      return action.data
    case 'LOGIN_FAIL':
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
      dispatch(setNotification('success', 'Logged in successfully!'))
    } catch (e) {
      console.log('error:', e.message)
      dispatch({
        type: 'LOGIN_FAIL'
      })
      dispatch(setNotification('error', 'Failed to log in'))
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
      dispatch(setNotification('success', 'Successfully created a new account!'))
    } catch (e) {
      console.log('error:', e.message)
      dispatch({
        type: 'REGISTRATION_FAIL'
      })
      dispatch(setNotification('error', 'Failed to create a new account'))
    }
  }
}

export const addFunds = (amount, user, displayNotif) => {
  return async dispatch => {
    try {
      const updatedUser = await userService.addFunds(amount, user)
      user.funds = updatedUser.funds
      window.localStorage.setItem('the-grand-exchange-user', JSON.stringify(user))
      dispatch({
        type: 'UPDATE_SUCCESS',
        data: user
      })
      if (displayNotif) dispatch(setNotification('success', `Successfully added ${amount}!`))
    } catch (e) {
      console.log(e)
      if (displayNotif) dispatch(setNotification('error', 'Failed to add funds'))
    }
  }
}

export const subtractFunds = (amount, quantity, user) => {
  return async dispatch => {
    dispatch(addFunds(-amount * quantity, user, false))
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
    dispatch(setNotification('success', 'Logged out successfully'))
  }
}

export default userReducer


