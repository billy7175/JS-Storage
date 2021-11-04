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
    version: 1.1
  },
  {
    make: "window",
    version: 1.2
  },
  {
    make: "window",
    version: 1.3
  },
  {
    make: "linux",
    version:2
  },
  {
    make: "linux",
    version:2.5
  },
  {
    make: "linux",
    version:2
  },
];

let group = swList.reduce((r, a) => {
  // console.log("a", a);
  // console.log("r", r);
  r[a.make] = [...(r[a.make] || []), a];
  return r;
}, {});
console.log("group", group);
