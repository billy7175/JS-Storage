function solution (str){
  let answer = '';
  for(var i = 0; i <str.length; i++){
    if(str.indexOf(str[i]) === i) answer +=str[i];
  }
  return answer
}

let str ='kkasdkas'
console.log(solution(str))