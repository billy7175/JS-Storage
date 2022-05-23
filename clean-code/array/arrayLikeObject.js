const arrayLikeObject = {
  0: 'HELLO',
  1: 'WORLD',
  length:2
}

const arr = Array.from(arrayLikeObject); // convert Object To Array

console.log(Array.isArray(arrayLikeObject)) // false
console.log(Array.isArray(arr)) // true
console.log(arr.length)
console.log(arr) //

/////////////////////////////////////////////////

function generatePriceList(){

  console.log('*-------------*')
  for(let i=0; index < arguments.length; i++){
    const element = arguments[i];
    console.log(element)
  }
  return Array.from(arguments).forEach((arg) => console.log(arg+'원'))
}

console.log(generatePriceList(100, 200, 300 ,400 ,500 ,600))
