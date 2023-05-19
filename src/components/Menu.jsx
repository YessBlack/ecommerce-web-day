import { Filters } from './Filters'

export function Menu () {
  return (
    <nav className='flex items-center justify-center'>
      <ul className='flex items-center gap-4 justify-center'>
        <Filters />
      </ul>
    </nav>
  )
}
