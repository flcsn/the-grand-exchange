import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducers/userReducer'
import productReducer from './reducers/productReducer'

const Store = () => {
  const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer
  })

  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
}

export default Store
