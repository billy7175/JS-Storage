var global = 0;

function outer(){
  console.log(global)
  global = 5;
  var testValue = 'testValue'

  function inner(){
    // var global = 10;

    console.log(global)
    console.log(testValue)
  }

  inner();
  global = 1;
  console.log(global)
}

outer();
// 예상 답
// 1. 0 // undefined 네 ?
// 2. 10
// 3. 1 