// PROPRIETIES
let startTime;
let timerInterval;
let timePassed;

const timerDisplay = document.querySelector('#timer');
const actionButton = document.querySelector('#action');

// METHODS
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 1);
    actionButton.textContent = 'Stop';
}

function stopTimer() {
    clearInterval(timerInterval);
    actionButton.textContent = 'Start';
}

function updateTime() {
    timePassed = Date.now() - startTime;

    let [hours, minutes, seconds] = formatTime(timePassed);

    seconds %= 60;
    minutes %= 60;

    displayTime(hours, minutes, seconds);
}

function formatTime(milliseconds) {
    let seconds = milliseconds / 1000;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(seconds / 3600);

    return [hours, minutes, seconds];
}

function displayTime(hours, minutes, seconds) {
    let displayText = '';
    if (hours > 0) {
        displayText += `${hours.toString().padStart(2, '0')}:`;
    }
    if (minutes > 0 || hours > 0) {
        displayText += `${minutes.toString().padStart(2, '0')}:`;
    }
    displayText += seconds.toFixed(3).padStart(6, '0');

    timerDisplay.textContent = displayText;
}
function toggleTimer() {
    if (actionButton.textContent === 'Start') {
        startTimer();
    } else {
        stopTimer();
    }
}

// ADD EVENTS LISTENERS //
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
    displayTime(0,0,0);
});
