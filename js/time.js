const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startButton = document.querySelector('.startButton');
const pause = document.querySelector('.pause');
const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const stop = document.querySelector('.stop');
let sessionHour = document.querySelector('.session-hours');

const buttons = document.querySelectorAll()

let secs = 0;
let mins = 25;
let interval;

function start() {

	if (secs === 0) {
		mins = mins - 1;
		minutes.innerHTML = mins;
		secs = 60;
	}

	if (secs > 0 && secs < 61) {
		secs--;
		seconds.innerHTML = secs;
		if (secs <= 9) {
			seconds.innerHTML = "0" + secs;
		}
		if (mins <= 9) {
			minutes.innerHTML = "0" + mins;
		}
		console.log(secs);
	}
}


startButton.addEventListener('click', function() {


	if (mins === 0) {
		alert("please entry a timer")
	} else {
		interval = setInterval(start, 1000);
	}
	console.log(secs);
})

pause.addEventListener('click', function() {
	clearInterval(interval);
	console.log(secs);
})

add.addEventListener('click', function() {

	mins++;
	minutes.innerHTML = mins;
	sessionHour.innerHTML = mins;
});

remove.addEventListener('click', function() {
	if (mins < 1) {
		alert("please enter a positive number");
		mins = 1;
	}
	mins--
	minutes.innerHTML = mins;
	sessionHour.innerHTML = mins;
});
