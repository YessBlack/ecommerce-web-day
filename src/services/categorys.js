export const getCategorys = async () => {
  const response = await fetch('https://dummyjson.com/products/categories')
  const data = await response.json()
  return data
}
