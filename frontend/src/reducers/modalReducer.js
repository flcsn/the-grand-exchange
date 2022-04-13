const baseState = {
  display: false,
  content: ''
}

const modalReducer = (state = baseState, action) => {
  switch (action.type) {
    case 'DISPLAY_MODAL':
    case 'CLOSE_MODAL':
      return action.data
    default:
      return state
  }
}

export const displayModal = (content) => {
  return async dispatch => {
    window.scroll(0,0)
    document.body.classList.toggle('no-scroll')
    dispatch({
      type: 'DISPLAY_MODAL',
      data: {
        display: true,
        content
      }
    })
  }
}

export const closeModal = () => {
  return async dispatch => {
    document.body.classList.toggle('no-scroll')
    dispatch({
      type: 'CLOSE_MODAL',
      data: baseState
    })
  }
}

export default modalReducer


