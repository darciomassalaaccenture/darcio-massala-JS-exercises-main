// This file contains helper code beyond the first week "Intro to JavaScript" course content.
// You should not have to make any changes in this file to get your game working.


// Validate academite functions are available
const functions = ["takeTurn", "getBoard", "checkWinner", "resetGame", "checkLow", "countWins"];
for (f of functions) {
    const functionObject = window[f];
    if (typeof functionObject !== "function") {
        throw `Looks like expected function '${f}' is missing. Double check the function signatures from academy.js are still present and unaltered.`;
    }
}

// Clear down the elements drawn on the board.
function clearBoard() {
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            const cell = document.getElementById(`row-${rowIndex}-column-${columnIndex}`)
            cell.style.backgroundColor= "white"
        }
    }
}

// Populate the grid with images based on the board state.
function drawBoard(board) {
    clearBoard();
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue;
            }
            const cell = document.getElementById(`row-${rowIndex}-column-${columnIndex}`)
            const cellText = board[rowIndex][columnIndex] === "red" ? cell.style.backgroundColor= "red" : cell.style.backgroundColor= "yellow";
            
        }
    }
}

function isValidRow(array) {
    return Array.isArray(array) && array.length === 6;
}

function isValidColumn(columnArray) {
    return columnArray.length === 7 && columnArray.every(function (item) { return ["red", "yellow", null].includes(item); });
}

// A grid position was clicked call the game's turn function, redraw and then check for a winner.
function positionClick(rowIndex, columnIndex, event) {
    let lowrow = checkLow(columnIndex);
    takeTurn(lowrow, columnIndex);
    const board = getBoard();
    if (!isValidRow(board) || !board.every(isValidColumn)) {
        throw "Expecting 'getBoard' to return a 2d array where all values match are null or one of the strings 'red' or 'yellow'. Actually received: " + JSON.stringify(board);
    }
    drawBoard(board);
    testWin(checkWinner())
}
    

function testWin(winner){
    console.log(winner)
    if (winner) {
        if (typeof winner !== "string" || !["red", "yellow", "nobody"].includes(winner)) { // If winner is not a string or the word "yellow", "red" or "nobody", then throw this error. If it is then declare winner name
            throw "Expecting 'checkWinner' to return null or one of the strings 'red', 'yellow' or 'nobody'. Actually received: " + winner;
        }
        const winnerName = document.getElementById("winner-name");
        
        winnerName.innerText = winner;
        const winnerDisplay = document.getElementById("winner-display");
        winnerDisplay.style.display = "block";
    }  
    if (winner === "red") {
        redWinCount++
    } else if (winner === "yellow"){
        yellowWinCount++
    }
    console.log(redWinCount, yellowWinCount)
}

// The reset button was clicked, call the game's reset function then reset the DOM.
function resetClick(event) {
    resetGame();
    const winnerName = document.getElementById("winner-name");
    winnerName.innerText = "";
    const winnerDisplay = document.getElementById("winner-display");
    winnerDisplay.style.display = "None";
    clearBoard();
    currentPlayer = player1
    turn = 0
}

// Bind the click events for the grid.
for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`);
        gridPosition.addEventListener("click", positionClick.bind("null", rowIndex, columnIndex));
    }
}

// Bind the click event for the reset button.
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetClick);

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        clearBoard,
        drawBoard,
        isValidColumn,
        positionClick,
        resetClick,
    }
} else {
    console.log("Running in Browser")
}
