function solution (str){
  let answer =''
  let numberAnswer = 0
  for (let x of str){
    if(x === x.toLowerCase()){
      answer += x
      numberAnswer += 1
    }
  }
  return {
    answer,
    numberAnswer
  }
}

let str ='itIsTimeToStudy'
console.log(solution(str))