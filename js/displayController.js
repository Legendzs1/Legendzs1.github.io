const displayController = ((gameBoard) => {
    let _x = 0

    const printGameBoard = () =>  gameBoard.forEach((gameBoardPiece) => {
        document.getElementById("block_"+_x).innerHTML = gameBoardPiece
        _x++
    },_x = 0)

    return {
        printGameBoard,
    }

})();

export default displayController