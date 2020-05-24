const displayController = DisplayController()
const player = Player()
const ai = AI()

const gameBoardFactory = () => {

    let _x = 0
    this.gameBoard = [
        [''],[''],[''],
        [''],[''],[''],
        [''],[''],['']
    ]

    const checkBoardForOccupiedSpace = () => {
        gameBoard.forEach((gameBoardPiece) => {
            if(gameBoardPiece==="") {
                playerPiece(clicked)
            }
            else{
                var occupiedSpace = document.getElementById("block_" + _x)
                occupiedSpace.classList.add(" occupied")
            }
        },_x = 0)
    }

    const resetGameBoardData = () => {
        displayController.resetGameBoard()
        gameBoard = [
            [''],[''],[''],
            [''],[''],[''],
            [''],[''],['']
        ]
    }

    const sendToPlayer = (storeUserPieceID) => {
        player.playerPiece(storeUserPieceID)
        AIPiece()
        displayController.showGameBoard()
    }

    const AIPiece = () => {
       if(player.returnPlayerPiece() === "X") {
           ai.getAIPiece("O")
        }
        else {
            ai.getAIPiece("X")
        }
    }

    const printGameBoard = () =>  displayController.printGameBoard(gameBoard)
    
    
    let insertPlayerChoice = (valueToAddToGameBoard) => gameBoard[valueToAddToGameBoard] = player.returnPlayerPiece() //{

    const insertAIChoice = (valueToAddToGameBoard) => gameBoard[valueToAddToGameBoard] = ai.returnAI()

    return {
        printGameBoard, 
        insertPlayerChoice, 
        sendToPlayer,
        resetGameBoardData,
        insertAIChoice
    }
}

const intializeGameBoard = gameBoardFactory()

function sendBlockChoiceToGameBoard(e) {
    let storeE = e.id
    // returns the value of the dom element
    let clicked = true
    let getValue = document.getElementById(storeE).getAttributeNode("value").value
    if(clicked) {
        clicked = false
        intializeGameBoard.insertPlayerChoice(getValue)
        intializeGameBoard.insertAIChoice(Math.floor((Math.random() * 9) ))
        intializeGameBoard.printGameBoard()
    }
    
}
function sendUserPieceToPlayer(e) {
    let storeUserPieceID = e.id
    intializeGameBoard.sendToPlayer(storeUserPieceID)
}

function callResetBoard() {
    intializeGameBoard.resetGameBoardData()
    intializeGameBoard.printGameBoard()
}

intializeGameBoard.resetGameBoardData()
