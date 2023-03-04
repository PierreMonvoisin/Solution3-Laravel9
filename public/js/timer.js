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
