// User stories 1

// const { response } = require("express")

// 1. Clicking a column places either a red or yellow disc in the lowest unoccupied position in the clicked column
// 2. Colour of disc will alternate each turn (click) (1/2 done)
// 3. No more than 42 turns can be played (done)
// 4. Red goes first (done)
// 5. Once a column is full (6 discs), no more discs can be placed

// Showing your game (so far)
// Showing your code
// What you have learnt
// Issues you need to deal with


//1.

// Create board

let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

const getEmptyBoard = async() => {
    const result = await fetch("http://localhost:8080/game/connect4/getEmptyBoard")
    const jsonResult = await result.json()
    console.log(result)
    board = jsonResult  
}

let newBoard = getEmptyBoard()

// Create players and game states

const player1 = "red"
const player2 = "yellow"
let currentPlayer = player1
gameOver = false

let turn = 0
const maxTurn = 42

const highScore = maxTurn - turn

let redWinCount = 0
let yellowWinCount = 0

// if function that counts wins
function countWins() { 
    if (board[row][column] == "red"){
        redWinCount++
        console.log("working")
    } else if (gameOver == true &&
        board[row][column] == "yellow"){
            yellowWinCount++
            console.log("working")
        }
    }

function checkLow(column) {
    for (let row = 0; row < 6; row++) {
        if(board[5 - row][column] == null) {
            // lastMove = [(5 - row),(column)]
            // console.log(lastMove)
            return 5 - row
        }
    }
}

//2.

// Click function from N&Cs

// This function add a nought and checks if player1 has played
// Lowest position - if statement (if these cells are unoccupied, then place the counter in the lowest position)
function takeTurn(row, column) {
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    if(gameOver == false){
        if (board[row][column]) {
        return alert("Invalid move: This square is taken")
        console.log("you cant do that, its taken")
        
    } else {
        if (checkLow(column) == row) { // When we pass column in checkLow, it should give us the cell in the lowest row
            board[row][column] = currentPlayer;
            currentPlayer = (currentPlayer == player1) ? player2 : player1;
            console.log("who's go is it?", currentPlayer)
            console.log("the board", board)
        }
    }
} else {
    alert ("Game is finished")
} turn++
console.log(turn)
}

// Winning combinationsS
function checkWinner() {
    console.log("checkWinner was called");
// Horizontal
    for(row = 0; row < 6; row++) {
        for(column = 0; column < 4; column++) {
            if( board[row][column] &&
                board[row][column] === board[row][column+1] &&
                board[row][column] === board[row][column+2] &&
                board[row][column] === board[row][column+3]){
                    gameOver=true
                    console.log("Game has been won by", board[row][column])
                    countWins
                    return board[row][column]
                }
        }
    }
    //Vertical
    for(row = 0; row < 3; row++) {
        for(column = 0; column < 7; column++) {
            if( board[row][column] &&
                board[row][column] === board[row+1][column] &&
                board[row+1][column] === board[row+2][column] &&
                board[row+2][column] === board[row+3][column]){
                    gameOver=true
                    countWins
                    return board[row][column]
                }
        }
    }
    // Diagonal right-left
    for(row = 0; row < 3; row++) {
        for(column = 0; column < 4; column++) {
            if( board[row][column] &&
                board[row][column] === board[row+1][column+1] &&
                board[row+1][column+1] === board[row+2][column+2] &&
                board[row+2][column+2] === board[row+3][column+3]){
                    gameOver=true
                    countWins
                    return console.log("Game has been won by", board[row][column])
                    return board[row][column]
                }
        }
    }
    // Diagonal left-right
    for(row = 3; row < 6; row++) {
        for(column = 0; column < 4; column++) {
            if( board[row][column] &&
                board[row][column] === board[row-1][column+1] &&
                board[row-1][column+1] === board[row-2][column+2] &&
                board[row-2][column+2] === board[row-3][column+3]){
                    gameOver=true
                    console.log("Game has been won by", board[row][column])
                    countWins
                    return "board[row][column]"
                } else if (turn==42){
                    return "nobody"
                }
        }
    }
}

// function that counts red and yellow wins


// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    // board = [
    //     // [null, null, null, null, null, null, null],
    //     // [null, null, null, null, null, null, null],
    //     // [null, null, null, null, null, null, null],
    //     // [null, null, null, null, null, null, null],
    //     // [null, null, null, null, null, null, null],
    //     // [null, null, null, null, null, null, null]
    // ]
    // gameOver = false
} 




// Return the current board state with either a "red" or a "yellow" in
// each position. Put a null in a position that hasn't been played yet.


function getBoard() {
    console.log("getBoard was called");
    return board;
}


function setScore(){
    let redWinDisplay = document.getElementById("team1Wins");
    redWinDisplay.innerText = redWinCount;

    let yellowWinDisplay = document.getElementById("team2Wins");
    yellowWinDisplay.innerText = yellowWinCount;
    console.log("working")

}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
        checkLow,
    }
} else {
    console.log("Running in Browser")
}




// User stories 2

// Winner message should be cleared (done)
// Red goes first after reset (done)
// After reset, games should continue to meet acceptance criteria of user story 1 (done)



// User stories 3

// A winner can be declared if a line occurs along any part of a row (done)
// A winner can be declared if a line occurs along any part of a column (done)
// A winner can be declared if a line occurs diagonally
// If all positions are occupied and no lines are achieved, then nobody is declared the winner
// If a winner is declared, then no further discs can be placed until the board is reset as per user story 2

//User stories 4

// High scores shown after every game, no matter who wins
// Score is calculated by subtracting the number of turns made before a winner is declared from 42
// Scoreboard tracking player victories
// High scores persist across multiple sessions of the game

