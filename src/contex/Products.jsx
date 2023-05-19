import { createContext, useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../services/products'
import { useFilters } from '../hooks/useFilters'

export const ProductsContext = createContext()

export function ProductsProvider ({ children }) {
  const [products, setProducts] = useState([])
  const { filter } = useFilters()

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

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
