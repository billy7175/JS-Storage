function solution (array){
  let answer = []
  answer.push(array[0])
  for(let i = 1; i < array.length; i++){
    if(array[i] > array[i -1]) answer.push(array[i])
  }
  return answer
}

let array = ['6','3','7','5','2','1','11']
console.log(solution(array))