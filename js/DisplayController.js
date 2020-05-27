const DisplayController = () => {
    let _x = 0

    const printGameBoard = (gameBoard) =>  gameBoard.forEach((gameBoardPiece) => {
        document.getElementById("block_"+_x).innerHTML = gameBoardPiece
        _x++
    },_x = 0)

    const resetGameBoard = () => {
        let playArea = document.getElementById("playArea")
        let choosePiece = document.getElementById("choosePiece")
        let xWon = document.getElementById("X-won")
        let OWon = document.getElementById("O-won")
        xWon.style.display = "none"
        OWon.style.display = "none"
        playArea.style.display = "none"
        choosePiece.style.display = "flex"

    }
    const showGameBoard = () => {
        let playArea = document.getElementById("playArea")
        let choosePiece = document.getElementById("choosePiece")
        playArea.style.display = "grid"
        choosePiece.style.display = "none"
        
    }
    const displayWinner = (winnerPiece) => {
        console.log(winnerPiece + " wins!!!")
        let winner = document.getElementById(winnerPiece + "-won")
        winner.style.display = "flex"
    }

    const displayTie = () => {
        console.log("It's a tie")
        let tie = document.getElementById("tie")
        tie.style.display = "flex"
    }

    return {
        printGameBoard,
        resetGameBoard,
        showGameBoard,
        displayWinner,
        displayTie
    }

};

