let xElement = 'x';
let oElement = 'circle';
const boxesElement = document.querySelectorAll('[gameboxes]');
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

boxesElement.forEach(boxes => {
    boxes.addEventListener('click', clickedOnce, { once: true });
});

function clickedOnce(e) {
    // add function for placing x/o
    // check for a win
    // check for a draw
    // check for whos turn
}

//input players names
//reset
//scoreboard