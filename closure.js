const secureBooking = function (){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log('#passengerCount', passengerCount)
    }
}

const booker = secureBooking()
booker();
booker();
booker();