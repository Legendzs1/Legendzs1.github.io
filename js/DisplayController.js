const DisplayController = () => {
    let _x = 0

    const printGameBoard = (gameBoard) =>  gameBoard.forEach((gameBoardPiece) => {
        document.getElementById("block_"+_x).innerHTML = gameBoardPiece
        _x++
    },_x = 0)

    const resetGameBoard = () => {
        displayUserName()
    }

    const displayUserName = () => {
        let userName = document.getElementById("userForm")
        userName.style.display = "block"
        hideUserPieceChoice()
        hideGameBoard()
        hideWinner()
    }

    const hideUserName = () => {
        let userName = document.getElementById("userForm")
        userName.style.display = "none"
    }

    const displayUserPieceChoice = () => {
        let choosePiece = document.getElementById("choosePiece")
        choosePiece.style.display = "flex"
    }

    const hideUserPieceChoice = () => {
        let choosePiece = document.getElementById("choosePiece")
        choosePiece.style.display = "none"
    }

    const hideGameBoard = () => {
        let playArea = document.getElementById("playArea")
        playArea.style.display = "none"
    }

    const showGameBoard = () => {
        let playArea = document.getElementById("playArea")
        let choosePiece = document.getElementById("choosePiece")
        playArea.style.display = "grid"
        choosePiece.style.display = "none"
    }

    const hideWinner = () => {
        let winner = document.getElementById("winner")
        let tie = document.getElementById("tie")
        winner.style.display = "none"
        tie.style.display = "none"
    }

    const displayWinner = (winnerPiece) => {
        let winner = document.getElementById("winner")
        let winnerStatement = `${winnerPiece} has won!!`
        winner.textContent = winnerStatement
        winner.style.display = "flex"
    }

    const displayTie = () => {
        let tie = document.getElementById("tie")
        tie.style.display = "flex"
    }

    return {
        printGameBoard,
        resetGameBoard,
        showGameBoard,
        displayWinner,
        displayTie,
        hideUserName,
        displayUserPieceChoice
    }

};

