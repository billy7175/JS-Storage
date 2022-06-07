console.log('Exporting module.');

const shippingCost = 10;
const cart = []

console.log('#shippingCost', shippingCost)
export const addCart = function (product, quantity){
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart.`)
}