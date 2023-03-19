// Timer
const TIMES_HISTORY = [];
const TIMER_TIMEOUT = 1;

const STATUS_READY = 'ready';
const STATUS_HOLDING = 'holding';
const STATUS_SET = 'set';
const STATUS_RUNNING = 'running';

const HOLD_PERIOD = 350;

// Scramble
const MOVES = ['U', 'D', 'L', 'R', 'F', 'B'];
const MOVES_LENGTH = MOVES.length;
const OPPOSITES = {
    'U': 'D', 'D': 'U',
    'L': 'R', 'R': 'L',
    'F': 'B', 'B': 'F',
};
const MIN_LENGTH = 20;
const MAX_LENGTH = 25;

const PRIMED_CHANCE = 0.25;
const DOUBLED_CHANCE = 0.125;

// Solves
const DATA_TO_DISPLAY = [
    'time_formatted',
    'average_of_5_formatted',
    'average_of_12_formatted',
];

// DOM Elements
const SCRAMBLE_DISPLAY = document.querySelector('#scramble');
const TIMER_DISPLAY = document.querySelector('#timer');
const AO5_DISPLAY = document.querySelector('#Ao5');
const AO12_DISPLAY = document.querySelector('#Ao12');
const SOLVES_TABLE = document.querySelector('#solvesTable');
