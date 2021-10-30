function solution (array){
  let n = array.length; 
  let answer = Array.from({length: n}, () => 1)
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[i]) answer[i]++;
    }
  }
  return answer
}

const array = [99,99,100,72,32,11,53,63]
console.log(solution(array))
// console.log(123)