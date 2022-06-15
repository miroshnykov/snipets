const getProducts = () => { return new Promise((resolve, reject) => { return setTimeout( () => resolve([{ id: 'product1' }, { id: 'product2' }, { id: 'product3'}, { id: 'product4'}]), 1000 ) }) }

const getProductId = (category) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(category.id), 1000)
  })
}

const capitalizeId = (id) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(id.toUpperCase()), 700)
  })
}

// const capitalizeProductsIds = async () => {
//   const products = await getProducts()
//
//   for (let product of products) {
//     const productId = await getProductId(product);
//     console.log('1-',productId);
//
//     const capitalizedId = await capitalizeId(productId);
//     console.log('2-',capitalizedId);
//   }
//
//   console.log('3-',products);
// }

const capitalizeProductsIds = async () => {
  const products = await getProducts()

  Promise.all(
    products.map(async (product) => {
      const productId = await getProductId(product);
      console.log('1-',productId);

      const capitalizedId = await capitalizeId(productId)
      console.log('2-',capitalizedId);
    })
  )

  // console.log('3-',products);
}
capitalizeProductsIds();

// capitalizeProductsIds()
