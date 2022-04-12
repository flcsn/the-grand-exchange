import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import productService from '../services/products'

import ProductList from './product-list'
import ProductListSkeleton from './product-list-skeleton'

const SearchResults = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const title = new URLSearchParams(location.search).get('title')

  useEffect(async () => {
    setLoading(true)
    const p = await productService.search(title)
    setProducts(p)
    setLoading(false)
  }, [title])

  return (
    <div>
      <div className='search-status'>
        { loading
          ? <p>Searching for products that match &apos;{title}&apos;</p>
          : <p>{products.length} { products.length === 1 ? 'match' : 'matches'} found for &apos;{title}&apos;</p>
        }
      </div>
      { loading
        ? <ProductListSkeleton />
        : <ProductList products={products} />
      }
    </div>
  )
}

export default SearchResults