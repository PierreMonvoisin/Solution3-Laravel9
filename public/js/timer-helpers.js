// METHODS
function formatTime(milliseconds) {
    let seconds = milliseconds / 1000;
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(seconds / 3600);

    return [hours, minutes, seconds];
}

function stringifyTime(hours, minutes, seconds) {
    let displayText = '';
    if (hours > 0) {
        displayText += `${hours.toString().padStart(2, '0')}:`;
    }
    if (minutes > 0 || hours > 0) {
        displayText += `${minutes.toString().padStart(2, '0')}:`;
    }
    return displayText + seconds.toFixed(3).padStart(6, '0');
}

function toggleTimer() {
    if (actionButton.textContent === 'Start') {
        startTimer();
    } else {
        stopTimer();
    }
}

// EVENTS LISTENERS //
// Display empty time on page load
window.addEventListener('load', function() {
    timerDisplay.textContent = stringifyTime(formatTime(0));
});
