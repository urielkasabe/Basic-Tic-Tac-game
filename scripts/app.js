const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]


let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        symbol: 'X'
    },

    {
        name: '',
        symbol: 'O'
    }
];

const playerConfigOverlayEl = document.getElementById("config-overlay");
const backdropEl = document.getElementById("backdrop");
const formEl = document.querySelector('form');
const errorOutput = document.getElementById('config-error');
const gameAreaEl = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const gameOverEl = document.getElementById('game-over');

const editPlayer1BtnEl = document.getElementById("edit-player-1");
const editPlayer2BtnEl = document.getElementById("edit-player-2");
const cancelOverlayBtnEl = document.getElementById('cancel-config');
const StartNewGameBtn = document.getElementById('start-game');
const gameFiledEl = document.querySelectorAll('#game-board');
const gameBoardEl = document.getElementById('game-board');

editPlayer1BtnEl.addEventListener("click", openPlayerConfig);
editPlayer2BtnEl.addEventListener("click", openPlayerConfig);

cancelOverlayBtnEl.addEventListener('click', closePlayer);
backdropEl.addEventListener('click', closePlayer);

formEl.addEventListener('submit', savePlayer);

StartNewGameBtn.addEventListener('click', startNewGame);

for (const gameField of gameFiledEl) {
    gameField.addEventListener('click', selectField);
}
