import { useContext } from 'react'
import { SearchContext } from '../contex/search'

export function useSearch () {
  const search = useContext(SearchContext)

  if (!search) {
    throw new Error('useSearch debe estar dentro del proveedor SearchContext')
  }

  return search
}
