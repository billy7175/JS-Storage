function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(3))

// Where things go wrong
// No Base Case
// Forgetting to return 
// Stack overflow