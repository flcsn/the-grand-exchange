import userService from '../services/users'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      window.localStorage.setItem('the-grand-exchange-user', JSON.stringify(action.data))
      return action.data
    }
    case 'REGISTRATION_SUCCESS': {
      window.localStorage.setItem('the-grand-exchange-user', JSON.stringify(action.data))
      return action.data
    }
    case 'LOGIN_FAIL': {
      return state
    }
    case 'REGISTRATION_FAIL': {
      return state
    }
    default:
      return state
  }
}

export const login = (username, password) => {
  return async dispatch => {
    try {
      const user = await userService.login(username, password)
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
      const user = await userService.register(username, password, emailAddress)
      dispatch({
        type: 'REGISTRATION_SUCCESS',
        data: user
      })
    } catch (e) {
      console.log('error:', e.message)
      dispatch({
        type: 'REGISTRATION_FAIL'
      })
    }
  }
}

export const getUserFromLocalStorage = () => {
  const user = window.localStorage.getItem('the-grand-exchange-user')
  if (!user) return
  const parsedUser = JSON.parse(user)
  return {
    type: 'LOGIN_SUCCESS',
    data: parsedUser
  }
}

export default userReducer


