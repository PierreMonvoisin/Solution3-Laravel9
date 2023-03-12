// Proprieties
const timerTimeout = 1;
const timesStorage = [];

let startTime = 0;
let timer;
let timePassed = 0;

// DOM elements
const scrambleDisplay = document.querySelector('#scramble');
const timerDisplay = document.querySelector('#timer');
const actionButton = document.querySelector('#action');
const Ao5Display = document.querySelector('#Ao5');
const Ao12Display = document.querySelector('#Ao12');

// Methods
function startTimer() {
    startTime = Date.now();
    timer = setInterval(updateTime, timerTimeout);

    actionButton.textContent = 'Stop';
}

function stopTimer() {
    clearInterval(timer);
    recordTime(timePassed);
    generateAndDisplayScramble();

    actionButton.textContent = 'Start';
}

function updateTime() {
    timePassed = Date.now() - startTime;

    displayTime(timePassed, timerDisplay);
}

function formatTime(milliseconds) {
    let seconds = milliseconds / 1000;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(seconds / 3600);

    seconds %= 60;
    minutes %= 60;

    return [hours, minutes, seconds];
}

function stringifyTime([hours, minutes, seconds]) {
    let displayText = '';
    if (hours > 0) {
        displayText += `${hours.toString().padStart(2, '0')}:`;
    }
    if (minutes > 0 || hours > 0) {
        displayText += `${minutes.toString().padStart(2, '0')}:`;
    }
    return displayText + seconds.toFixed(3).padStart(6, '0');
}

function displayTime(time, location) {
    if (location) {
        location.textContent =
            time !== '--' ?
                stringifyTime(formatTime(time)) :
                time;
    }
}

function recordTime(timeInMilli) {
    timesStorage.push(timeInMilli);
    calculateAverages(timesStorage);
}

// Events listeners
const timerHoldPeriod = 350;

let timerStatus = 'ready';
let timerHold;
// Toggle Timer on click or spacebar press
actionButton.addEventListener('click', toggleTimer);
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        // If timer is idle
        if (timerStatus === 'ready') {
            timerStatus = 'waiting';
            timerDisplay.style.color = 'red';
            // Wait for timer to be set
            timerHold = setTimeout(function(){
                timerStatus = 'set';
                timerDisplay.style.color = 'green';
            }, timerHoldPeriod);
        // If timer is running, stop it
        } else if (timerStatus === 'running') {
            toggleTimer();
        }
    }
    // Any key can stop the timer
    if (timerStatus === 'running') {
        toggleTimer();
    }

});
document.addEventListener('keyup', function (event) {
    if (event.code === 'Space') {
        event.preventDefault();

        if (timerStatus === 'set') {
            clearTimeout(timerHold);
            toggleTimer();
        } else if (timerStatus === 'waiting') {
            clearTimeout(timerHold);
            timerStatus = 'ready';
        }
        timerDisplay.style.color = 'black';
    }
})
// Display empty time on page load
window.addEventListener('load', function() {
    displayTime(0, timerDisplay);
    generateAndDisplayScramble();
});
function toggleTimer() {
    if (actionButton.textContent === 'Start') {
        startTimer();
        timerStatus = 'running';
    } else {
        stopTimer();
        timerStatus = 'ready';
    }
}
