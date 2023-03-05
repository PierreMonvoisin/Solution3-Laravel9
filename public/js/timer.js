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
        location.textContent = stringifyTime(formatTime(time));
    }
}

function recordTime(timeInMilli) {
    timesStorage.push(timeInMilli);
    calculateAverages(timesStorage);

    // console.log(`timesList => [${timesStorage.toString()}]`);
}

// Events listeners
// Toggle Timer on click or spacebar press
actionButton.addEventListener('click', toggleTimer);
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        toggleTimer();
    }
});
// Display empty time on page load
window.addEventListener('load', function() {
    displayTime(0, timerDisplay);
    displayScramble( generateScramble() );
});
function toggleTimer() {
    if (actionButton.textContent === 'Start') {
        startTimer();
    } else {
        stopTimer();
    }
}
