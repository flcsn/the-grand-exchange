import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../reducers/productReducer'

import ProductList from './product-list'

const MainPage = () => {
  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}

export default MainPage