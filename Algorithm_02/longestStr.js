function solution(arr) {
  let answer;
  // let max = Number.MIN_SAFE_INTEGER;
  let max = 0;
  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

let arr = ["teacher", "student", "beautiful", "good"];
console.log(solution(arr));
