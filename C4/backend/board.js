// User stories 1

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

const emptyBoard = () => {
return [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
]
}


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


module.exports = {emptyBoard}