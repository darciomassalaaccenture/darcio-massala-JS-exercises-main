const express = require('express')

const {emptyBoard} = require("./board.js")

const app = express()

const cors = require("cors")
app.use(cors())

app.use(express.json())

// app.get('/hello', (req, res) => {
//     res.send('world')
//     console.log('/hello called')
// })


app.get('/game/connect4/getEmptyBoard', (req, res) => {  
    console.log("Entering GET /game/connect4/getEmptyBoard")
    const newEmptyBoard = emptyBoard()
    console.log("Entering GET /game/connect4/getEmptyBoard with", newEmptyBoard)
    res.status(200).send(newEmptyBoard)
    emptyBoard()
})

app.post('game/connect4/checkWinner')

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Express server up on port: ${PORT}`)
})

//     app.get('/fail', (req, res) => {  res.status(400).json({ errorMessage: "missing parameters" })
// })

// app.get('/hello-path/:person', (req, res) => {  res.send('hello ' + req.params.person)
// })
