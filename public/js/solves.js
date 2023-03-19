const emptyTableMessage = document.querySelector('#emptyTableMessage');
const tdClasses = SOLVES_TABLE.querySelector('tr:first-of-type td:first-of-type').getAttribute('class');

function displayNewSolve(solve)
{
    const lastTd = SOLVES_TABLE.querySelector('tr:first-of-type td:first-of-type');
    const row = document.createElement('tr');

    let lastSolveId = Number(lastTd.innerHTML);

    if (isNaN(lastSolveId)) {
        lastSolveId = 0;
        emptyTableMessage.remove();
    }

    const cell = createCell(lastSolveId + 1);
    row.appendChild(cell);

    for (const key in solve) {
        if (DATA_TO_DISPLAY.includes(key)) {
            const cell = createCell(solve[key] !== '00.000' ? solve[key] : '--');
            row.appendChild(cell);
        }
    }

    SOLVES_TABLE.prepend(row);
}

function createCell(text)
{
    const cell = document.createElement('td');
    cell.textContent = text;
    cell.setAttribute('class', tdClasses);

    return cell;
}

function fetchTimeHistory()
{
    if (timesHistoryFromDatabase !== '') {
        const times_history = JSON.parse(timesHistoryFromDatabase);
        for (let i = 0; i < times_history.length; i++) {
            TIMES_HISTORY.push(times_history[i]);
        }
    }
}
