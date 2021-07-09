// Why do we get this werid result from the map method?
// myarray.map(func);
// myarray.map((val, idx, arr) => {})
let question = ['1', '7', '11'].map(parseInt); // returns [1, NaN, 3]
//1. '1', 0 = default to radix;
//2. '7', 1 - 1 is ok as the radix 7is illegla ... NaN
//3. '11', 2 - binary as the radix 00000011.. in decimal is 3.

console.log("parseInt.js")

// answer

let answer = ['1', '7', '11'].map(num => parseInt(num))
console.log(question)
