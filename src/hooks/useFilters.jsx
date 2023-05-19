import { useContext } from 'react'
import { FilterContext } from '../contex/filters'

export function useFilters () {
  const filters = useContext(FilterContext)

  if (!filters) {
    throw new Error('useFilters must be used within a FilterProvider')
  }

  return filters
}
