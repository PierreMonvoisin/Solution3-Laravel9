// METHODS
function toggleTimer() {
    if (actionButton.textContent === 'Start') {
        startTimer();
    } else {
        stopTimer();
    }
}

function formatTime(milliseconds) {
    let seconds = milliseconds / 1000;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(seconds / 3600);

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
    const stringTime = stringifyTime(formatTime(time));

    switch (location) {
        case 'timer':
            timerDisplay.textContent = stringTime;
            break;

        case 'message':
            messageDisplay.textContent = stringTime;
            break;

        case 'Ao5':
            Ao5Display.textContent = stringTime;
    }
    return stringifyTime(formatTime(time));
}

function storeTime(timeInMilli) {
    timesStorage.push(timeInMilli);
    messageDisplay.textContent = `[${timesStorage.toString()}]`;
}

function calculateAverages(timesList) {
    let Ao5 = 0;
    let Ao12 = 0;

    if (timesList.length >= 5) {
        const Ao5Array = timesList.slice(-5);
        const maxTime = Math.max(...Ao5Array);
        const minTime = Math.min(...Ao5Array);
        const filteredAo5Array = Ao5Array.filter(num => num !== maxTime && num !== minTime);
        const Ao5Sum = filteredAo5Array.reduce((acc, curr) => acc + curr, 0);
        Ao5 = Math.floor(Ao5Sum / filteredAo5Array.length);
        displayTime(Ao5, 'Ao5');
    }
}

// EVENTS LISTENERS //
// Display empty time on page load
window.addEventListener('load', function() {
    displayTime(0, 'timer');
});
