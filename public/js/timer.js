let startTime;
let elapsedTime = 0;
let timerInterval;

const timerDisplay = document.querySelector("#timer");
const actionButton = document.querySelector("#action");

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1);
    actionButton.textContent = "Stop";
}

function stopTimer() {
    clearInterval(timerInterval);
    actionButton.textContent = "Start";
}

function updateTimer() {
    const elapsedMilliseconds = Date.now() - startTime;
    elapsedTime = elapsedMilliseconds / 1000;
    timerDisplay.textContent = elapsedTime.toFixed(3);
}

actionButton.addEventListener("click", function() {
    if (actionButton.textContent === "Start") {
        startTimer();
    } else {
        stopTimer();
    }
});
