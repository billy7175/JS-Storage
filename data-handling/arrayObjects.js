const cars = [
  {
    make: "audi",
    model: "r8",
    year: "2012",
  },
  {
    make: "audi",
    model: "rs5",
    year: "2013",
  },
  {
    make: "ford",
    model: "mustang",
    year: "2012",
  },
  {
    make: "ford",
    model: "fusion",
    year: "2015",
  },
  {
    make: "kia",
    model: "optima",
    year: "2012",
  },
];

const swList = [
  {
    make: "window",
    version: 1.1,
  },
  {
    make: "window",
    version: 1.2,
  },
  {
    make: "window",
    version: 1.3,
  },
  {
    make: "linux",
    version: 2,
  },
  {
    make: "linux",
    version: 2.5,
  },
  {
    make: "linux",
    version: 2,
  },
];

let group = swList.reduce((r, a) => {
  // console.log("a", a);
  // console.log("r", r);
  r[a.make] = [...(r[a.make] || []), a];
  return r;
}, {});

const { window, linux } = group;
console.log(' ???', group.window)
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
console.log("window", window);
console.log("linux", linux);

function groupBy(key) {
  return function group(array) {
    return array.reduce((acc, obj) => {
      const property = obj[key];
      // obj[key] here will be '1991'.
      acc[property] = acc[property] || [];
      // At this point acc['1991'] doesn't yet exist, so it will be an empty array. This step is important as it checks if acc['1991'] exists, and if not, creates it and assigns a value of an empty array.
      acc[property].push(obj);
      // Here, all we're doing is pushing our object into the right group
      return acc;
    }, {});
  };
}

const groupByYear = groupBy("make");
// console.log(groupByYear(swList));
