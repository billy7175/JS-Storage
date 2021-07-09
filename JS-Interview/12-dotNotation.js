// Differences between dot notation and square braket syntax

let sam = {
  castiel: 'mary'
};

let dean = {
  john:'crowley',
  mary:'chuck'
};

// which, if any, of these three log statements will work ?
console.log(dean[sam.castiel]); //dean['mary'] => chuck
console.log(dean.sam.castiel); // fail
console.log(dean[sam['castiel']]); // dean['mary'] => chuck
// same['castiel'] => mary sam.castiel
console.log(dean[sam[castiel]]); // dean[sam[undefined]] fail
console.log("node 12-dotNotation.js")
