export function Rating ({ value }) {
  value = Math.round(value)
  const stars = []

  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<span key={i} className='icon-star text-yellow-400' />)
    } else {
      stars.push(<span key={i} className='icon-start text-red-400' />)
    }
  }

  return <div className=''>{stars}</div>
}
