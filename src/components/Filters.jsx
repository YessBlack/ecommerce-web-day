import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { setFilter, categorys } = useFilters()

  const handleChangeCategory = (event) => {
    setFilter(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className=''>
      <div>
        <label htmlFor=''>Categorias: </label>
        <select onChange={handleChangeCategory}>
          <option value='all'>All</option>
          {
            categorys.map(filter => (
              <option key={filter} value={filter}>{filter}</option>
            ))
          }
        </select>
      </div>
    </section>
  )
}
