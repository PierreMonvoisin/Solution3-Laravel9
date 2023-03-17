const solvesTable = document.querySelector('#solvesTable');
const emptyTableMessage = document.querySelector('#emptyTableMessage');
const tdClasses = solvesTable.querySelector('tr:first-of-type td:first-of-type').getAttribute('class');
const dataToDisplay = ['time_formatted', 'average_of_5_formatted', 'average_of_12_formatted'];

function displayNewSolve (solve) {
    const lastTd = solvesTable.querySelector('tr:first-of-type td:first-of-type');
    const row = document.createElement('tr');

    let currentSolveId = Number(lastTd.innerHTML);

    if (isNaN(currentSolveId)) {
        currentSolveId = 0;
        emptyTableMessage.remove();
    }

    const cell = createCell(currentSolveId + 1);
    row.appendChild(cell);

    for (const key in solve) {
        if (dataToDisplay.includes(key)) {
            const cell = createCell(solve[key] !== '00.000' ? solve[key] : '--');
            row.appendChild(cell);
        }
    }

    solvesTable.prepend(row);
}

function createCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    cell.setAttribute('class', tdClasses);
    return cell;
}
