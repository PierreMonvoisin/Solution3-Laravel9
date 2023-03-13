// Proprieties
const timerTimeout = 1;
const timesStorage = [];

let startTime = 0;
let timer;
let timePassed = 0;

// Methods
function startTimer() {
    startTime = Date.now();
    timer = setInterval(updateTime, timerTimeout);
}

function stopTimer() {
    clearInterval(timer);
    recordTime(timePassed);
    generateAndDisplayScramble();
}

function updateTime() {
    timePassed = Date.now() - startTime;

    displayTime(timePassed, TIMER_DISPLAY);
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
        const timeString =
            time !== 0 ?
                stringifyTime(formatTime(time)) :
                time;

        location === TIMER_DISPLAY ?
            location.textContent = stringifyTime(formatTime(time)) :
            location.textContent = formatNullTime(timeString);
    }
}

function recordTime(timeInMilli) {
    timesStorage.push(timeInMilli);
    let [Ao5, Ao12] = calculateAverages(timesStorage);

    let solve = {
        'user_id': USER_ID,
        'scramble': currentScramble,
        'time': timeInMilli,
        'Ao5': Ao5,
        'Ao12': Ao12,
    }
    storeSolve(solve);
}

function storeSolve(solve) {
    console.log(solve['user_id']);
}

// Events listeners
let timerStatus = STATUS_READY;
let timerHold;
// Toggle Timer on click or spacebar press
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        // If timer is idle
        if (timerStatus === STATUS_READY) {
            timerStatus = STATUS_HOLDING;
            TIMER_DISPLAY.style.color = 'red';
            // Wait for timer to be set
            timerHold = setTimeout(function(){
                timerStatus = STATUS_SET;
                TIMER_DISPLAY.style.color = 'green';
            }, HOLD_PERIOD);
        // If timer is running, stop it
        } else if (timerStatus === STATUS_RUNNING) {
            toggleTimer();
        }
    }
    // Any key can stop the timer
    if (timerStatus === STATUS_RUNNING) {
        toggleTimer();
    }

});
document.addEventListener('keyup', function (event) {
    if (event.code === 'Space') {
        event.preventDefault();

        if (timerStatus === STATUS_SET) {
            clearTimeout(timerHold);
            toggleTimer();
        } else if (timerStatus === STATUS_HOLDING) {
            clearTimeout(timerHold);
            timerStatus = STATUS_READY;
        }
        TIMER_DISPLAY.style.color = 'black';
    }
})
// Display empty time on page load
window.addEventListener('load', function() {
    displayTime(0, TIMER_DISPLAY);
    generateAndDisplayScramble();
});
function toggleTimer() {
    if (timerStatus !== STATUS_RUNNING) {
        startTimer();
        timerStatus = STATUS_RUNNING;
    } else {
        stopTimer();
        timerStatus = STATUS_READY;
    }
}
