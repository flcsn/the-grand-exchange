import userService from '../services/users'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      console.log('login success')
      return action.data
    }
    case 'REGISTRATION_SUCCESS': {
      console.log('registration success')
      return action.data
    }
    case 'LOGIN_FAIL': {
      console.log('login failed')
      return state
    }
    case 'REGISTRATION_FAIL': {
      console.log('registration failed')
      return state
    }
    default:
      return state
  }
}

export const login = (username, password) => {
  return async dispatch => {
    try {
      const result = await userService.login(username, password)
      dispatch({
        type: 'LOGIN_SUCCESS',
        data: result
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
      const result = await userService.register(username, password, emailAddress)
      dispatch({
        type: 'REGISTRATION_SUCCESS',
        data: result
      })
    } catch (e) {
      console.log('error:', e.message)
      dispatch({
        type: 'REGISTRATION_FAIL'
      })
    }
  }
}

export default userReducer


