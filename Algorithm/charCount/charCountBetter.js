function charCount (str){
  var obj = {};
  for(var i =0; i < str.length; i++){
    var char = str[i].toLowerCase();
    if(isAlphaNumeric(char)){
      obj[char] = ++obj[char] || 1;
    }
    // if(/[a-z0-9]/.test(char)){
    //   obj[char] = ++obj[char] || 1;
    // }
  }
  return obj;
}


function isAlphaNumeric(char){
  var code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)) {
      return false;
    }
    return true;
}

console.log(charCount('hello world hh'))
