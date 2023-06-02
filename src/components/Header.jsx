import { useSearch } from '../hooks/useSearch'
import { Filters } from './Filters'

export function Header () {
  const { setSearch } = useSearch()

  const handleSubmitQuery = (event) => {
    event.preventDefault()
    const { value } = event.target.querySelector('input')
    setSearch(value)
  }

  return (
    <header className='mb-4 sticky top-0'>
      <div className='w-[100%] bg-[#2D3030] h-[25px] text-white text-center flex justify-center gap-4'>
        <span className='icon-heart-1 text-yellow-400' /> PROMOCIONES DEL MES <span className='icon-heart-1 text-yellow-400' />
      </div>
      <div className='flex flex-wrap items-center justify-center sm:justify-between sm:p-4 shadow mb-4 py-4 gap-4 bg-white'>
        <h1 className='font-bold text-lg border-none outline-none focus:outline-none'>Tecno-<span className='bg-orange-500 p-1'>Shop</span></h1>
        <div className='flex items-center justify-center'>
          <ul className='flex items-center gap-4 justify-center'>
            <Filters />
          </ul>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <div className='relative'>
            <form onSubmit={handleSubmitQuery}>
              <input
                type='text'
                placeholder='Mackbook, iphone'
                className='p-1.5 border border-gray-400 outline-none focus:outline-none w-[230px]'
              />
              <button className='absolute top-0 right-5 flex items-center h-full pl-3'>
                <span className='icon-search text-stone-300' />
              </button>
            </form>
          </div>
          <span className='icon-user text-xl' />
          <span className='icon-cart text-xl' />
        </div>
      </div>
    </header>
  )
}
