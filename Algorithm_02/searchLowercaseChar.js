// 소문자 => 대문자 변환 출력
function solution (str){
  let answer =''
  let numberAnswer = 0
  for (let x of str){
    if(x === x.toLowerCase()){ answer += x.toUpperCase()
      numberAnswer += 1
    } else {
      answer += x
    }
  }
  return {
    answer,
    numberAnswer
  }
}

let str ='itIsTimeToStudy'
console.log(solution(str))