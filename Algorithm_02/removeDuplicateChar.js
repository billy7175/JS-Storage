// 중복되는 문자 제거 
// function solution (str){
//   let answer = '';
//   for(var i = 0; i <str.length; i++){
//     console.log(str[i], i, str.indexOf(str[i]))
//     if(str.indexOf(str[i]) === i) answer +=str[i];
//   }
//   return answer
// }


// 특정 문자열이 몇번 반복되는지 
function solution (str){
  let answer = 0
  let pos = str.indexOf('k')
  while(pos !== -1){
    answer ++
    pos = str.indexOf('k', pos+1)
  }
  return answer
}

let str ='kkaadsdkakkps'
console.log(solution(str))