// PROPRIETIES
let startTime = 0;
let timer;
let timerTimeout = 1;
let timePassed = 0;
let timesStorage = [];

const timerDisplay = document.querySelector('#timer');
const actionButton = document.querySelector('#action');
const messageDisplay = document.querySelector('#message');

// METHODS
function startTimer() {
    startTime = Date.now();
    timer = setInterval(updateTime, timerTimeout);
    actionButton.textContent = 'Stop';
}

function stopTimer() {
    clearInterval(timer);
    storeTime(timePassed);
    actionButton.textContent = 'Start';
}

function updateTime() {
    timePassed = Date.now() - startTime;

    let [hours, minutes, seconds] = formatTime(timePassed);

    seconds %= 60;
    minutes %= 60;

    timerDisplay.textContent = stringifyTime(hours, minutes, seconds);
}

// EVENTS LISTENERS
// Toggle Timer on click or spacebar press
actionButton.addEventListener('click', toggleTimer);
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        toggleTimer();
    }
});
