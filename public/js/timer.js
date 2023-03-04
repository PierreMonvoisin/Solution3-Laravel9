// Proprieties
let startTime;
let elapsedTime = 0;
let timerInterval;

const timerDisplay = document.querySelector('#timer');
const actionButton = document.querySelector('#action');

// Methods
function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 1);
    actionButton.textContent = 'Stop';
}

function stopTimer() {
    clearInterval(timerInterval);
    actionButton.textContent = 'Start';
}

function updateTime() {
    const timePassed = Date.now() - startTime;

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

// Add events listeners
actionButton.addEventListener('click', function() {
    if (actionButton.textContent === 'Start') {
        startTimer();
    } else {
        stopTimer();
    }
});
window.addEventListener('load', function() {
    displayTime(0,0,0);
});
