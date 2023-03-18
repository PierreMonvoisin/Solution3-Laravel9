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
    let suffix = '';
    let previousMove = '';
    let penultimateMove = '';

    // Methods
    function getRandomMove()
    {
        return MOVES[Math.floor(Math.random() * MOVES_LENGTH)];
    }

    for (let i = 0; i < scrambleLength; i++) {
        let move = getRandomMove();

        while (move === previousMove || (areOpposites(move, previousMove) && move === penultimateMove)) {
            move = getRandomMove();
        }

        let randomChance = Number(Math.random().toFixed(3));
        if (DOUBLED_CHANCE > randomChance) {
            suffix = '2';
        } else if (PRIMED_CHANCE > randomChance) {
            suffix = '\'';
        } else {
            suffix = '';
        }

        scramble += move + suffix + ' ';

        currentScramble = scramble;

        penultimateMove = previousMove;
        previousMove = move;
    }

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
