function calculateAverages(timesList)
{
    let Ao5 = 0;
    let Ao12 = 0;

    if (timesList.length >= 5) {
        const Ao5Array = timesList.slice(-5);

        Ao5 = calculateAverage(Ao5Array);

        if (timesList.length >= 12) {
            const Ao12Array = timesList.slice(-12);

            Ao12 = calculateAverage(Ao12Array);
        }
    }

    displayTime(Ao5, AO5_DISPLAY);
    displayTime(Ao12, AO12_DISPLAY);

    return [Ao5, Ao12];
}
function calculateAverage(timesArray)
{
    const [maxTime, minTime] = [Math.max(...timesArray), Math.min(...timesArray)];

    const filteredArray = timesArray.filter(num => {
        return num !== maxTime && num !== minTime;
    });

    if (filteredArray.length === 0) {
        return 0;
    }

    const sum = filteredArray.reduce((acc, curr) => acc + curr, 0);

    return Math.floor(sum / filteredArray.length);
}

function formatNullTime(average)
{
    return average === 0 ? '--' : average;
}
