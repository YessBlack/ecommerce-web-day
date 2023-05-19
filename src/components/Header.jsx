import { Menu } from './Menu'

export function Header () {
  return (
    <header className='mb-4 sticky top-0'>
      <div className='w-[100%] bg-[#2D3030] h-[25px] text-white text-center'>
        💛 PROMOCIONES DEL MES 💛
      </div>
      <div className='flex flex-wrap items-center justify-center sm:justify-between sm:p-4 shadow mb-4 py-4 gap-4 bg-white'>
        <h1 className='font-bold text-lg border-none outline-none focus:outline-none'>Tecno-<span className='bg-orange-500 p-1'>Shop</span></h1>
        <Menu />
      </div>
    </header>
  )
}
