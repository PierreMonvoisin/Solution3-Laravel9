let startTime;
let elapsedTime = 0;
let timerInterval;

const timerDisplay = document.querySelector('#timer');
const actionButton = document.querySelector('#action');

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1);
    actionButton.textContent = 'Stop';
}

function stopTimer() {
    clearInterval(timerInterval);
    actionButton.textContent = 'Start';
}

function updateTimer() {
    const timePassed = Date.now() - startTime;
    let seconds = timePassed / 1000;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(seconds / 3600);

    seconds %= 60;
    minutes %= 60;

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

actionButton.addEventListener('click', function() {
    if (actionButton.textContent === 'Start') {
        startTimer();
    } else {
        stopTimer();
    }
});
