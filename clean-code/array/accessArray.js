// Accessing Array


function head(arr){
  return arr[0] || '';
}

function formatDate(targetDate){
  
  const date = head(targetDate.toISOString().split('T'));
  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`
}

console.log(formatDate(new Date("1994-11-11")));