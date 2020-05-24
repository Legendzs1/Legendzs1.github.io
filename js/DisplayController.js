const DisplayController = () => {
    let _x = 0

    const printGameBoard = (gameBoard) =>  gameBoard.forEach((gameBoardPiece) => {
        document.getElementById("block_"+_x).innerHTML = gameBoardPiece
        _x++
    },_x = 0)

    const resetGameBoard = () => {
        let playArea = document.getElementById("playArea")
        let choosePiece = document.getElementById("choosePiece")
        playArea.style.display = "none"
        choosePiece.style.display = "flex"

    }
    const showGameBoard = () => {
        let playArea = document.getElementById("playArea")
        let choosePiece = document.getElementById("choosePiece")
        playArea.style.display = "grid"
        choosePiece.style.display = "none"
        
    }

    return {
        printGameBoard,
        resetGameBoard,
        showGameBoard
    }

};

