let startTime;
let elapsedTime = 0;
let timerInterval;

const timerDisplay = document.getElementById("timer");
const startStopButton = document.getElementById("start-stop");
const resetButton = document.getElementById("reset");

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    startStopButton.textContent = "Stop";
}

function stopTimer() {
    clearInterval(timerInterval);
    startStopButton.textContent = "Start";
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerDisplay.textContent = "0.00";
    startStopButton.textContent = "Start";
}

function updateTimer() {
    const elapsedMilliseconds = Date.now() - startTime;
    elapsedTime = elapsedMilliseconds / 1000;
    timerDisplay.textContent = elapsedTime.toFixed(2);
}

startStopButton.addEventListener("click", function() {
    if (startStopButton.textContent === "Start") {
        startTimer();
    } else {
        stopTimer();
    }
});

resetButton.addEventListener("click", resetTimer);
