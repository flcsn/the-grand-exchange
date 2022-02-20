import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducers/userReducer'
import productReducer from './reducers/productReducer'
import notificationReducer from './reducers/notificationReducer'

const Store = () => {
  const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    notification: notificationReducer
  })

  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
}

export default Store
