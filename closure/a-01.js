// 1. A function always has access to the variable environment of the execution context in which it was created.
// 2. Event after dept execution context is gone.
// 3. The closure is then basically the variable environment attahced to the function.

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