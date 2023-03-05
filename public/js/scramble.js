function generateScramble() {
    const moves = ["U", "D", "R", "L", "F", "B"];
    const suffixes = ["", "'", "2"];
    let scramble = "";

    for (let i = 0; i < 20; i++) {
        const move = moves[Math.floor(Math.random() * moves.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        scramble += move + suffix + " ";
    }

    return scramble.trim();
}
