// Proprieties
let currentScramble = '';

// Methods
function generateScramble()
{
    // Constants
    const scrambleLength =
        Math.floor(
            Math.random() * (MAX_LENGTH - MIN_LENGTH + 1)
        ) + MIN_LENGTH;

    // Proprieties
    let scramble = '';
    let previousMove = '';
    let penultimateMove = '';

    // Methods
    function getRandomMove()
    {
        return MOVES[Math.floor(getRandomChance() * MOVES_LENGTH)];
    }
    function getRandomSuffix()
    {
        return SUFFIXES[Math.floor(getRandomChance() * SUFFIXES_LENGTH)];
    }

    for (let i = 0; i < scrambleLength; i++) {
        let move = getRandomMove();

        while (
            move === previousMove ||
            (areOpposites(move, previousMove) && move === penultimateMove)
        ) {
            move = getRandomMove();
        }

        scramble += move + getRandomSuffix() + ' ';

        penultimateMove = previousMove;
        previousMove = move;
    }
    currentScramble = scramble;

    return scramble.trim();
}

function displayScramble(scramble)
{
    SCRAMBLE_DISPLAY.textContent = scramble;
}

function generateAndDisplayScramble()
{
    displayScramble(generateScramble());
}

function areOpposites(currentMove, previousMove)
{
    return currentMove === OPPOSITES[previousMove];
}

function getRandomChance() {
    if (window.crypto) {
        const randomValues = new Uint32Array(1);
        window.crypto.getRandomValues(randomValues);
        return randomValues[0] / 4294967296;
    } else {
        return Math.random();
    }
}
