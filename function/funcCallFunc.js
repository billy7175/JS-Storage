

function cutFruitIntoPieces(fruit){
    return fruit * 4

}

function fruitProcessor (apples, oranges){
    const applePieces = cutFruitIntoPieces(apples)
    const orangePieces = cutFruitIntoPieces(oranges)
    return `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`
}

console.log(fruitProcessor(2, 3))