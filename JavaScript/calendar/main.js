const currentYear = 2021;
// start week 속성에 따라 weekDays 값을 변경시켜준다.
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekDaysTest = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const firsTest = weekDaysTest.findIndex(day => {
  return day === 'Fri'
})

console.log('firstTest', firsTest)


const daysIndex = [0, 1, 2 ,3 ,4 ,5 , 6]
// const daysIndex = [0, 1, 2 ,3 ,4 ,5 , 6]
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'Octomber',
	'November',
	'December'
];

const getAllDays = year => {
	// 특정 년도의 첫번쨰 일(1일쨰) First day of the year - 1st January
	const firstDay = new Date(`January 1 ${year}`);
	// 특정 년도의 마지막 일(365일째) Last day of the year - 31th December - used to stop adding days to the array
	const lastDay = new Date(`December 31 ${year}`);

	// Add first day 
	const days = [firstDay];
  // console.log('getAllDays의 const days ===', days)

	// Used to keep track of the day
	let lastDayInArray = firstDay;
  // console.log('getAllDays의 let lastDayInArray ===', lastDayInArray)
	
	// Loop while there are new days to be added in the current year
	while (lastDayInArray.getTime() !== lastDay.getTime()) {
		days.push(addDays(lastDayInArray, 1));
		lastDayInArray = days[days.length - 1];
	}
  // console.log('return days ===', days)
	return days;
};

const dates = getAllDays(currentYear);
// console.log('const dates ===', dates)
let monthsHTML = '';

// Loop over the months and create a div for each month
months.forEach((month, idx) => {
	monthsHTML += `<div class="months month_${idx}">
        <h3>${month}+</h3>
        <div class="week_days_container">
            ${weekDays
							.map(day => `<div class="week_days">${day}</div>`)
							.join('')}
        </div>
        <div class="days_container"></div>
    </div>`;
});

calendar.innerHTML = monthsHTML;

// Loop over each day and
dates.forEach(date => {
  // date = 365 days
  // getDays는 요일의 index 0~6
  console.log('forEach date ===', date.getDay())
	const month = date.getMonth();
	const monthEl = document.querySelector(`.month_${month} .days_container`);
  monthEl.style.border ='1px solid gold'

	// create extra day slots if needed before day 1
  // date가 1일 그리고 요일이 0이 아니면 즉 일요일이 아니면 
  // 조건 => 
    if (date.getDate() === 1 && date.getDay() !== 0) {
      for (let i = 0; i < date.getDay(); i++) {
        const emptySpot = createEmptySpot();
        
        // 밑의 메소드를 통해서 이전 달 일들을 채워준다.
        monthEl.appendChild(emptySpot);
      }
    }  
  
	
	const dateEl = createDateEl(date);

	monthEl.appendChild(dateEl);
});

function createDateEl(date) {
	const day = date.getDate();
	const dateEl = document.createElement('div');
	dateEl.classList.add('days');
	dateEl.innerHTML = `<span class="circle">${day}</span>`;
  dateEl.style.border='1px solid purple'

	return dateEl;
}

function createEmptySpot() {
	const emptyEl = document.createElement('div');
	emptyEl.classList.add('days');
  emptyEl.style.border = '1px solid red'

	return emptyEl;
}

// function from StackOverflow: https://stackoverflow.com/questions/563406/add-days-to-javascript-date
function addDays(date, days) {
	var result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

