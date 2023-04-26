//User Stories



// Make your changes to store and update game state in this file

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
let board = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
]
const player1 = ("nought")
const player2 = ("cross")
let currentPlayer = player1;

let gameOver = false
// DM - Create players

//whosTurnIsIt

// This function add a nought and checks if player1 has played
function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    if(board[row][column]){
        gameOver = true;
        console.log("you cant do that, its taken")
    } else { 
        board[row][column] = currentPlayer;
        currentPlayer = (currentPlayer ==player1)? player2: player1;
        console.log("whos go is it", currentPlayer)
        console.log("the board", board)    
    }
   
}


// create function that changes turn

// function takeTurn(row,column) {
//     if (board.includes(player1)){
//     let currentPlayer = player2
//     console.log("takeTurn was called with row: "+row+", column:"+column);
//     board[row][column] = currentPlayer
//     let result = board[row][column].includes(player2)
//     console.log(result)
// }


// function changeTurn(currentPlayer){
//     if (result.includes(player1)){
//         let currentPlayer = player2;
//     }
//     console.log(currentPlayer)
// }

//if (result == true){


// for (let i=0; i<board; i++) {
//     for (let j=0; j<board[i].length; j++) {  
//         if (board[row][column] === "nought")
//         console.log("takeTurn was called with row: "+row+", column:"+column);
//         board[row][column] = "cross"
//     }
// }

    

//for (let i = null; ; )

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    
    let winningCombo = [
        [[0,0], [1,0],[2,0]],
        [[0,0],[0,1],[0,2]],
        [[0,1],[0,2],[0,3]],
        [[0,2], [1,1], [2,0]],
        [[2,0],[2,1],[2,2]],
        [[0,2], [1,2],[2,2]],
        [[1,0], [1,1],[1,2]],
    ]

    for (let i = 0; i < winningCombo.length;i++){
        console.log("line", winningCombo[i])

        const position1 = winningCombo[i][0]
        const position2 = winningCombo[i][1]
        const position3 = winningCombo[i][2]

        if (board[position1[0]][position1[1]]&&
            board[position1[0]][position[1]] === board[position2[0]][position2[1]]&&
            board[position1[0]][position[1]] === board[position3[0]][position3[1]]
            ){
            let gameOver = true;
            console.log(board[position[0]][position[1]],"wins")}

}
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    board = [
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
    ]
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.


function getBoard() {
    console.log("getBoard was called");
    return board;
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
    }
} else {
    console.log("Running in Browser")
}

