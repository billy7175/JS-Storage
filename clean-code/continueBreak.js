const orders = ['first', 'second','third'];
// 1. general for loop: 사용 가능
for(let index=0; index < orders.length; index++){
  const order = orders[index];
  if(order === 'second'){
    continue;
  }
  // console.log(order)
}
// 2. for of 사용 가능
for(const num of orders){
  if(num === 'second'){
    continue
  }
  // console.log(num)
}

// 2. for of 사용 가능
for(const num in orders){
  if(orders[num] === 'second'){
    continue
  }
  console.log('num :' , num)
  console.log(orders[num])
}

// 조기에 종료하기 위한 방법으로 
// Array.prototype.every()
// Array.prototype.some()
// Array.prototype.find()
// Array.prototype.findIndex()
// 가 있다.


// forEach, map, reduce Higher-Order-Function 에는 
// continue, break 등을 사용할 수 없다.
// orders.forEach(function(order){
//   if(order === 'second'){
//     continue;
//   }
//   console.log(order)
// })


