const originValue = 10

function update(originValue){
    originValue += 10
    console.log(originValue) 
}

update(originValue)
console.log(originValue)



// const originObject = {
//     nickName : 'Tomas Shelby - Book Maker',
//     firstName : "Tomas",
//     lastName : 'Shelby'

// }

// function updateName(object){
//     object.nickName = `Mr.${object.lastName} - Peaky Blinders`
//     console.log(object)
// }

// updateName(originObject) // object.name : Mr.Shelby - Peaky Blinders
// console.log(originObject) // object.name : Mr.Shelby - Peaky Blinders

const originObject = {
    nickName : 'Tomas Shelby - Book Maker',
    firstName : "Tomas",
    lastName : 'Shelby'

}

function updateName(object){
    const clonedObject = Object.assign({} , object)
    clonedObject.nickName = `Mr.${clonedObject.lastName} - Peaky Blinders`
    console.log(clonedObject)
}

updateName(originObject) // object.name : Mr.Shelby - Peaky Blinders
console.log(originObject) // object.name : Tomas Shelby - Book Maker