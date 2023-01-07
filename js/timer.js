//Timer number
let storeTimer = {
	days: 30,
	hours: 24,
	minutes: 59,
	seconds: 59,
}

let {days, hours, minutes, seconds} = storeTimer;

//Get from html
let days_markup = document.querySelector('#days');
let hours_markup = document.querySelector('#hours');
let minutes_markup = document.querySelector('#minutes');
let seconds_markup = document.querySelector('#seconds');

//timerLaunch
const timerLaunch = () => {
	if (days >= 1) {
		if (seconds >= 1) {
			seconds = seconds - 1;
		} 
		
		else {
			if (minutes != 0) {
				minutes = minutes - 1;
				seconds = 59;
			} 
			
			if (minutes == 0) {
				hours = hours - 1;
				minutes = 59;
			}
		}
	}
	
	if (days < 1) {
		days = 18;
		hours = 24;
		minutes = 59;
		seconds = 59;
	}

	if (hours < 1) {
		days = days - 1;
		hours = 24;
	}

	markUpTimer()
}

const markUpTimer = () => {
	days_markup.innerHTML = days;
	hours_markup.innerHTML = hours;
	minutes_markup.innerHTML = minutes;
	seconds_markup.innerHTML = seconds;
}

markUpTimer()

setInterval(timerLaunch, 1000);