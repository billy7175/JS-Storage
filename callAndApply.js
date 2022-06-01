const Daehan = {
    airline: 'Dae Han',
    iataCode: 'DH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

Daehan.book(239, 'Billy');
Daehan.book(111, 'John');
console.log(Daehan)

const Eurowings = {
    airline : 'Euro Wings',
    iataCode: 'EW',
    bookings: []
}

const book = Daehan.book

book.call(Eurowings, 222, 'Jack')
console.log('#Eurowings : ', Eurowings)