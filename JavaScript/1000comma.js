function numberFormat(number) {
  var string = number.toString();
  var length = string.length;
  var standard = (length % 3 === 0) ? 3 : length % 3;
  console.log("standard",standard)
  var arr = [];
  var start = 0;

  while (true) {
      var temp = string.substr(start, standard);
      
      if (temp === "") break;
      
      arr.push(temp);
      
      start = start + standard;
      
      standard = 3;
  }

  var result = arr.join(",");
  console.log('result', result)

  return result;
}

console.log(numberFormat(10000000)); // 10,000,000
