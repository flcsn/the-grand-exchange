const baseState = {
  type: '',
  message: ''
}

const notificationReducer = (state = baseState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'CLEAR_NOTIFICATION':
      return baseState
    default:
      return state
  }
}

export const setNotification = (type, message) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        type,
        message
      }
    })
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    }, 3000)
  }
}

export default notificationReducer


