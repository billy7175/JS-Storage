console.log("connected");
// 1. 'string'.slice('시작 인덱스', 종료 인덱스)
// 2. 문자열을 반환하지만 기존 문자열을 변환시키지 않는다. which means 변수와 함께 사용. 
const string = "this is a test sentence";

string.slice(0,3)
console.log(string.slice(0,3))

const array = ['one', 'twp', 'three','four','five']
console.log(array.slice(0,3))

const objectArray = [
  {name:'name01'},
  {name:'name02'},
  {name:'name03'},
  {name:'name04'},
  {name:'name05'}
]
console.log(objectArray.slice(0,3))