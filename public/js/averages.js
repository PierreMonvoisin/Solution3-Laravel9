function calculateAverages(timesList) {
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

    displayTime(Ao5, Ao5Display);
    displayTime(Ao12, Ao12Display);
}
function calculateAverage(timesArray) {
    const [maxTime, minTime] = [Math.max(...timesArray), Math.min(...timesArray)];

    const filteredArray =
        timesArray.filter(num =>
            num !== maxTime &&
            num !== minTime
        );

    if (filteredArray.length === 0) {
        return 0;
    }

    const sum =
        filteredArray.reduce((acc, curr) =>
            acc + curr,
            0
        );

    return Math.floor(sum / filteredArray.length);
}
