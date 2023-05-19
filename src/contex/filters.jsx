import { createContext, useEffect, useState } from 'react'
import { getCategorys } from '../services/categorys'

export const FilterContext = createContext()

export function FilterProvider ({ children }) {
  const [filter, setFilter] = useState(null)
  const [categorys, setCategorys] = useState([])

  useEffect(() => {
    getCategorys().then(data => setCategorys(data))
  }, [])

  return (
    <FilterContext.Provider value={{ categorys, filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}
