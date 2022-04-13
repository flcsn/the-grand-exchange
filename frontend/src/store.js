import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducers/userReducer'
import productReducer from './reducers/productReducer'
import notificationReducer from './reducers/notificationReducer'
import modalReducer from './reducers/modalReducer'

const Store = () => {
  const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    notification: notificationReducer,
    modal: modalReducer
  })

  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
}

export default Store
