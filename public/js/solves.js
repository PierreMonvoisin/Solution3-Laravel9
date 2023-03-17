const solvesTable = document.querySelector('#solvesTable');
const tdClasses = solvesTable.querySelector('tr:first-of-type td:first-of-type').getAttribute('class');
const dataToDisplay = ['time_formatted', 'average_of_5_formatted', 'average_of_12_formatted'];

function displayNewSolve (solve) {
    const row = document.createElement('tr');

    for (const key in solve) {
        if (dataToDisplay.includes(key)) {
            const cell = document.createElement('td');
            cell.textContent = solve[key] !== '00.000' ? solve[key] : '--';
            cell.setAttribute('class', tdClasses);
            row.appendChild(cell);
        }
    }

    solvesTable.appendChild(row);
}

