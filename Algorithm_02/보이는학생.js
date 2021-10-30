
function solution (){
  let answer = 1;
  let max = array[0]
  for(let i = 1 ; i < array.length; i++){
    if(array[i] > max){
      answer ++;
      max = array[i]
    }
    
  }
  return answer
}

let array = ['183','160','146','155','150','141','120']

console.log(solution(array))