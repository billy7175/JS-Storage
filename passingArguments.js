const flight = 'LH234';
const jonas = {
    name : 'Jonas Schmedtamnn',
    passport: 24739479284
}

const checkIn = function (flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = `MR. ${passenger.name}`
    if(passenger.passport === 24739479284){
        console.log('Check in')
    } else {
        console.log('Wrong passport')
    }
}


checkIn(flight, jonas)
console.log(flight)
console.log(jonas)

// 자문자답 : checkIn 함수를 호출의 jonas 객체의 속성 name이 바뀐 원리는 ?
// JavaScript 객체에서는 call by reference가 일어난다.