import { useProducts } from '../hooks/useProducts'

export function Product () {
  const { products } = useProducts()
  return (
    <>
      {
          products.map(product => (
            <article
              className='w-[300px] h-[320px] bg-white shadow-lg rounded-lg overflow-hidden'
              key={product.id}
            >
              <img
                className='w-full h-[200px] object-cover'
                src={product?.thumbnail}
                alt={product.name}
              />
              <div className='px-4'>
                <h2 className='font-bold'>{product.title}</h2>
                <div className='flex items-center justify-between'>
                  {
                  product.discountPercentage > 0
                    ? (
                      <div className='flex items-center justify-between gap-4 text-lg'>
                        <p className='line-through text-red-400'>$ {product.price}.00 </p>
                        <p> $ {Math.ceil(product.price - (product.discountPercentage * product.price / 100))}.00</p>
                      </div>
                      )
                    : null
                  }
                  <button className='text-xl bg-[#9e1392] p-2 rounded-full w-[40px] h-[40px] text-white'>
                    <span className='icon-cart-add' />
                  </button>
                </div>
                <p />
              </div>

            </article>
          ))
      }
    </>
  )
}
