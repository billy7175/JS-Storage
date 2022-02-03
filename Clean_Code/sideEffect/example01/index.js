// Don't ❌
let dateBad = "21-8-2021";

function badExample() {
  dateBad = dateBad.split("-");
}

badExample();

// Another function could be expecting date as a string
console.log(dateBad); // ['21', '8', '2021'];

// Do ✅
function splitIntoDayMonthYear(date) {
  return date.split("-");
}

const date = "21-8-2021";
const newDate = splitIntoDayMonthYear(date);

// Original vlaue is intact
console.log(date); // '21-8-2021';
console.log(newDate); // ['21', '8', '2021'];