function genRandomNumber (min, max){
  const randomNumber = Math.floor(Math.random() * (max + 1) + min);
  return randomNumber
}

function getDateTime(targetDate){
  targetDate = new Date(targetDate)
  console.log('targetDate : ', targetDate)
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.getHours();
  return {
    month : month > 10 ? month : '0' + month,
    day : day > 10 ? day : '0' + day,
    hours : hour > 10 ? hour : '0'+ hour
  }
}
console.log(getDateTime('2021-12-01'))

// function getDateTime (){
//   const currentDateTime = getDateTime(new Date())
//   computedKoreaDate()

//   return {
//     month :computedKoreaDate(currentDateTime.month)+'분 전',
//     day : computedKoreaDate(currentDateTime.day)+'분 전',
//     hours : computedKoreaDate(currentDateTime.hour)+'분 전',
  
//   }
// }

function getElements(){
  const tempObj = {} // 

  const result = {
    title: document.querySelector('.title'),
    text: document.querySelector('.text'),
    value: document.querySelector('.value')
  }
  return result;
}