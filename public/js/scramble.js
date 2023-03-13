// Proprieties
const moves = ['U', 'D', 'L', 'R', 'F', 'B'];
const movesLength = moves.length;
const opposites = {
    'U': 'D', 'D': 'U',
    'L': 'R', 'R': 'L',
    'F': 'B', 'B': 'F',
};
const scrambleMinLength = 20;
const scrambleMaxLength = 25;

// Methods
function generateScramble() {
    // Constants
    const primedChance = 0.25;
    const doubledChance = 0.125;

    const scrambleLength =
        Math.floor(
            Math.random() * (scrambleMaxLength - scrambleMinLength + 1)
        ) + scrambleMinLength;

    // Proprieties
    let scramble = '';
    let suffix = '';
    let previousMove = '';
    let penultimateMove = '';

    // Methods
    function getRandomMove() {
        return moves[Math.floor(Math.random() * movesLength)];
    }

    for (let i = 0; i < scrambleLength; i++) {
        let move = getRandomMove();

        while (move === previousMove || (areOpposites(move, previousMove) && move === penultimateMove)) {
            move = getRandomMove();
        }

        let randomChance = Number(Math.random().toFixed(3));
        if (doubledChance > randomChance) {
            suffix = '2';
        } else if (primedChance > randomChance) {
            suffix = '\'';
        } else {
            suffix = '';
        }

        scramble += move + suffix + ' ';

        penultimateMove = previousMove;
        previousMove = move;
    }

    return scramble.trim();
}

function displayScramble(scramble) {
    scrambleDisplay.textContent = scramble;
}

function generateAndDisplayScramble() {
    displayScramble(generateScramble());
}

function areOpposites(currentMove, previousMove) {
    return currentMove === opposites[previousMove];
}
