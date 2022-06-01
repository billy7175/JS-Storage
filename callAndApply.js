const Daehan = {
    airline: 'Dae Han',
    iataCode: 'DH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

const Eurowings = {
    airline : 'Euro Wings',
    iataCode: 'EW',
    bookings: []
}

const Swiss = {
    airline: 'Swiss Wings',
    iataCode: 'SW',
    bookings: []
}

const book = Daehan.book

Daehan.book(239, 'Billy');
Daehan.book(111, 'John');
book.call(Eurowings, 222, 'Jack')
book.call(Swiss, 767, 'Swiss Person')
console.log('#Eurowings : ', Eurowings)
console.log('#Swiss : ', Swiss)
console.log(Daehan)