function greet (greet){
    return function(name) {
        console.log(`${greet} ${name}`)
    }
}

const anotherGreet = (greet) => (name) => console.log(`${greet} ${name}`)

const greeterHey = greet('Hey')
greeterHey('Billy')
greet('Hey')('You');
anotherGreet('HEY')('YOUUUU!')
