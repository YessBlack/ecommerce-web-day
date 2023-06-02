import { createContext, useEffect, useState } from 'react'
import { getProductByQuery, getProducts, getProductsByCategory } from '../services/products'
import { useFilters } from '../hooks/useFilters'
import { useSearch } from '../hooks/useSearch'

export const ProductsContext = createContext()

export function ProductsProvider ({ children }) {
  const [products, setProducts] = useState([])
  const { filter } = useFilters()
  const { search } = useSearch()

  useEffect(() => {
    getProducts().then(data => setProducts(data))
  }, [])

  useEffect(() => {
    if (filter?.category === 'all') {
      getProducts().then(data => setProducts(data))
      return
    }
    if (filter?.category) {
      console.log('categorys', filter)
      getProductsByCategory(filter.category).then(data => setProducts(data.products))
    }
  }, [filter])

  useEffect(() => {
    if (search === '') {
      getProducts().then(data => setProducts(data))
      return
    }

    if (search) {
      getProductByQuery(search).then(data => setProducts(data.products))
    }
  }, [search])

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
