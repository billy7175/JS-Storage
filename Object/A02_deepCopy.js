
const book = {
    item: {title: "자바스크립트"}
}

let copy = {};

for(let key in book ){
    let value = book[key]
    console.log('book[key] : ', book[key])
    console.log('copy : ',key)
    copy[key] = {};
    for(let name in value){
        copy[key][name] = value[name]
    }
}
console.log('==== copy ======')
console.log(copy)