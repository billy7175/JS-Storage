function solution (array){
  let answer;
  answer = array.filter((x,i) => {
    return array.indexOf(x) === i
  })
  return answer

}

let array = ['good','time','good', 'time','student']
console.log(solution(array))