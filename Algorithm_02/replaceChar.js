function solution (s){
  let answer = s;
  answer = answer.replace(/A/g, '#');
  return answer;
}

function solution02 (s){
  let answer = s;
  answer = '**'+ answer.substring(2)
  return answer;
}

let str = 'BANANA'

console.log(solution(str))

console.log(solution02(str))