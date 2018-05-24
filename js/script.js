'use strict'
//Global Variables
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const add = document.querySelector('.add');
const remove = document.querySelector('.remove');

const breakRemove = document.querySelector('.break-remove');
const breakAdd = document.querySelector('.break-add');

let breakHour = document.querySelector('.break-hours');
let sessionHour = document.querySelector('.session-hours');

const controlButton = document.querySelectorAll('button');
	let stopwatch = document.querySelector(".stopwatch");

let secs = 0;
let mins = 25;
let interval;
let clicked = true;

//For all the buttons that are pressed, fire off the control function
[].forEach.call(controlButton, function(ele) {
		ele.addEventListener('click', controls, false);
});

//function for start interval
function start() {
	let stopwatchtitle = document.querySelector('.stopwatch-title');

	//if sec is 0, -1 for min and seconds back to 60//
	if (secs === 0) {
		mins = mins - 1;
		minutes.innerHTML = mins;
		secs = 60;
	}

	//if sec is more than 0 and less than 60 seconds, it adds as a countdown.
	if (secs > 0 && secs < 61) {
		secs--;
		seconds.innerHTML = secs;
		//if seconds or minutes is less than 10, add a 0 to it so it's still double digit
		if (secs <= 9) {
			seconds.innerHTML = "0" + secs;
		}
		if (mins <= 9) {
			minutes.innerHTML = "0" + mins;
		}
	}

	//if minutes and seconds are 0//
	if (mins === 0 && secs === 0) {
		//and if current stopwatch is on session,
		if (stopwatchtitle.innerHTML = "Session") {
			//turns it into the break stopwatch instead
			minutes.innerHTML = breakHour.innerHTML;
			alert("Break is starting");
			stopwatchtitle.innerHTML = "Break";
			stopwatchtitle.classList.add("red")
			mins = parseInt(breakHour.innerHTML);
			//or else if its on break
	} else if (stopwatchtitle.innerHTML = 'Break') {
			//vice versa
			minutes.innerHTML = sessionHour.innerHTML;
			alert("Session is starting");
			stopwatchtitle.classList.add("green");
			stopwatchtitle.innerHTML = "Session";
			mins = parseInt(sessionHour.innerHTML);
	}
}
}

//function for clickedButton
function controls() {
	//if the button is start button
	if (this.innerHTML === "Start" && clicked === true) {
		//disable all the adding/removing for minutes
		breakRemove.classList.add("disabled");
		add.classList.add("disabled");
		remove.classList.add("disabled");
		breakAdd.classList.add("disabled");
		//switch it to green//
		stopwatch.className = "stopwatchgreen";
		//stop double clicking and double firing of function
		clicked = false;
		//if minutes and seconds are at 0
		if (mins === 0 && secs === 0) {
			//do not start function
			alert("please enter a time")
		} else {
			//or else start it up with an interval of every second
			interval = setInterval(start, 1000);
		}


	} else if (this.innerHTML === "Pause") {
		//if its the paused button, turn the surrounding red
		stopwatch.className = "stopwatchred";
		clicked = true;
		//enable all the adding and removing
		breakRemove.classList.remove("disabled");
		add.classList.remove("disabled");
		remove.classList.remove("disabled");
		breakAdd.classList.remove("disabled");
		//pause
		clearInterval(interval);

		//else if it's stop button
	} else if (this.innerHTML === "Stop") {
		//everythings back to regular
		clicked = true;
		stopwatch.className = "stopwatch";
		minutes.innerHTML = sessionHour.innerHTML;
		mins = sessionHour.innerHTML;
		seconds.innerHTML = "0" + 0;
		secs = 0;
		//still paused
		clearInterval(interval);
	}
}


add.addEventListener('click', function() {
	//just adds the number of minutes to each session
	mins++;
	minutes.innerHTML = mins;
	sessionHour.innerHTML = mins;
});

remove.addEventListener('click', function() {
	//remove the number as well as not letting it dip under 0//
	if (parseInt(sessionHour.innerHTML) < 1) {
		mins = 1;
		sessionHour.innerHTML = 1;
	}
	mins--
	minutes.innerHTML = mins;
	sessionHour.innerHTML = mins;
});


breakAdd.addEventListener('click', function() {
		breakHour.innerHTML++;
})

breakRemove.addEventListener('click', function() {
	if (parseInt(breakHour.innerHTML) < 1) {
		mins = 1;
		breakHour.innerHTML = 1;
	}

		breakHour.innerHTML--;
})
