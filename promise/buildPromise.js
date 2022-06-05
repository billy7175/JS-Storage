const lotteryPromsie = new Promise(function (resolve, reject){
    if(Math.random() > 0.5){
        resolve('You won')
    } else {
        reject('You lost') 
    }
})

lotteryPromsie.then((data) => { console.log(data)}).catch((err) => console.error(err) )