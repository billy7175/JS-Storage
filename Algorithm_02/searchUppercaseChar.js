function solution (str){
  let answer = '';
  for(let x of str){
     if(x === x.toUpperCase()){
      answer += x;
     }
    
   }

   return answer;
}


let str ="Korea Is A Good Country"
console.log(solution(str))