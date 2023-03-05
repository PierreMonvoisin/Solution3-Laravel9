const moves = ['U', 'D', 'L', 'R', 'F', 'B'];
const oppositeMoves = {
    'U': 'D', 'D': 'U',
    'L': 'R', 'R': 'L',
    'F': 'B', 'B': 'F',
};
const scrambleMinLength = 20;
const scrambleMaxLength = 25;
const primedChance = 25 / 100;
const doubledChance = 12.5 / 100;

function generateScramble() {
    let scramble = '';
    let suffix = '';
    let previousMove = '';
    let penultimateMove = '';
    const scrambleLength =
        Math.floor(
            Math.random() * (scrambleMaxLength - scrambleMinLength + 1)
        ) + scrambleMinLength;

    for (let i = 0; i < scrambleLength; i++) {
        let move = moves[Math.floor(Math.random() * moves.length)];

        while (move === previousMove || (areOpposites(move, previousMove) && move === penultimateMove)) {
            move = moves[Math.floor(Math.random() * moves.length)];
        }

        let randomChance = Math.random().toFixed(3);
        if (doubledChance > randomChance) {
            suffix = '2';
        } else if (primedChance > randomChance) {
            suffix = '\'';
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

function areOpposites(currentMove, previousMove) {
    return currentMove === oppositeMoves[previousMove];
}
