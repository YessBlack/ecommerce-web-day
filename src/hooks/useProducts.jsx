import { useContext } from 'react'
import { ProductsContext } from '../contex/Products'

export function useProducts () {
  const products = useContext(ProductsContext)

  if (!products) {
    throw new Error('useProducts must be used within a ProductsProvider')
  }

  return products
}
