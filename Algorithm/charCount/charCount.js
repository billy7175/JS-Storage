console.log('start')
function charCount(str){
  //make object to return at end
  var result = {};
  console.log('result = ', result)
  // loop over string, for each character...
  for(var i = 0; i < str.length; i++){
    var char = str[i].toLowerCase()
    //if the char is a number/letter AND is a key in object, add one to count
    if(result[char] > 0){
      // console.log(result[char]++)
      result[char]++;
      console.log(' for result = ', result)
    }
    //if the char is a number/letter And not in object, add it to object and set valie to 1 
    else {
      // console.log( result[char])
      result[char] =1
      console.log(' for else result = ', result)
    }
  }
  
  
  return result
}

console.log(charCount('hi there'))

var obj = {}
obj['첫 번째 속성'] = 'AGE'

console.log('obj = ', obj)

console.log('end')