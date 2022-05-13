import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../reducers/productReducer'

import ProductList from './ProductList'
import ProductListSkeleton from './skeletons/ProductListSkeleton'

const MainPage = () => {
  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className='body-container'>
      { !products
        ? <ProductListSkeleton />
        : <ProductList products={products} />
      }
    </div>
  )
}

export default MainPage