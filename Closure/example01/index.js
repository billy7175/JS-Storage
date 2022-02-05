const greet = function (greeting){
  return function (name){
    console.log(`${greeting} ${name}`)
  }
}

const greeterHey = greet('Hey');
greeterHey('John')
greeterHey('Tomas')
greet('Hello')('Billy')

const greetArr = greeting => name => console.log(`${greeting} ${name}`)
greetArr('Hi? again')('John')