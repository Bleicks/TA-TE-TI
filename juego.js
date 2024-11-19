const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const clickedCell = event.target;
    const cellIndex = clickedCell.getAttribute('data-index');

    if (gameBoard[cellIndex] !== '' || !gameActive) {
        return;
    }

    gameBoard[cellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    checkWinner();
}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = 'ganador' ;{currentPlayer} 'ha ganado';
        gameActive = false;
        return;
    }

    if (!gameBoard.includes('')) {
        statusText.textContent = 'Empate!';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = 'JUEGUEN';{currentPlayer};
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    statusText.textContent = 'Turno del jugador' ;{currentPlayer};
    cells.forEach(cell => (cell.textContent = ''));
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);