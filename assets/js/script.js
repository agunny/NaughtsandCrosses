let xElement = 'x';
let oElement = 'circle';
let boxesElement = document.querySelectorAll('.boxes');
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let winnerElement = document.getElementById('winner');
let resetGame = document.getElementById('resetgame');
let playerXWinsDisplay = document.getElementById('playerXWins');
let playerOWinsDisplay = document.getElementById('playerOWins');
let playerXNameInput = document.getElementById('playerXNameInput');
let playerONameInput = document.getElementById('playerONameInput');
let playerXNameDisplay = document.getElementById('playerXName');
let playerONameDisplay = document.getElementById('playerOName');
let playerXName = '';
let playerOName = '';
let playerXWins = 0;
let playerOWins = 0;
let circleTurn = '';
let gameActive = true;

gameBegin();

resetGame.addEventListener('click', gameBegin);

function gameBegin() {
    circleTurn = false;
    boxesElement.forEach(boxes => {
        gameActive = true;
        boxes.classList.remove(xElement);
        boxes.classList.remove(oElement);

        boxes.removeEventListener('click', clickedOnce);
        boxes.addEventListener('click', clickedOnce, { once: true });
    });
}

function clickedOnce(e) {
    if (!gameActive) {
        return;
    }
    let cell = e.target;
    let currentElement = circleTurn ? oElement : xElement;
    placeElement(cell, currentElement);
    swapTurns();
    if (checkWin(currentElement)) {
        gameFinished(false);
    } else if (isDraw()) {
        gameFinished(true);
    } else { }
}

function gameFinished(draw) {
    //game finished, win or draw
    if (draw) {
        winnerElement.innerText = 'Draw!';
    } else {
        let winningPlayer = circleTurn ? 'X' : 'O';
        updateScore(winningPlayer);
        winnerElement.innerText = `${circleTurn ? playerXName : playerOName} Wins!`;
    }
    gameActive = false;
}

//check for draw
function isDraw() {
    return [...boxesElement].every(boxes => {
        return boxes.classList.contains(xElement) || boxes.classList.contains(oElement);
    });
}

function placeElement(cell, currentElement) {
    cell.classList.add(currentElement);
}

function swapTurns() {
    circleTurn = !circleTurn;
}

//to check all winning combinations
function checkWin(currentElement) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return boxesElement[index].classList.contains(currentElement);
        });
    });
}

//input players names
playerXNameInput.addEventListener('input', () => {
    playerXName = playerXNameInput.value;
    playerXNameDisplay.textContent = playerXName;
});

playerONameInput.addEventListener('input', () => {
    playerOName = playerONameInput.value;
    playerONameDisplay.textContent = playerOName;
});

//scoreboard
function updateScore(player) {
    if (player === 'X') {
        playerXWins++;
        playerXWinsDisplay.textContent = playerXWins;
    } else {
        playerOWins++;
        playerOWinsDisplay.textContent = playerOWins;
    }
}
