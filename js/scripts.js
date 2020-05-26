const displayController = DisplayController()
const player = Player()
const ai = AI()

const gameBoardFactory = () => {

    let _x = 0
    let _y = 0
    this.gameBoard = [
        [''],[''],[''],
        [''],[''],[''],
        [''],[''],['']
    ]

    const addOccupiedClassToDiv = () => {
        for(let i = 0; i < gameBoard.length; i++) {
            if(gameBoard[i] != "") {
                var occupiedSpace = document.getElementById("block_" + i)
                occupiedSpace.className += " occupied"
            }
            else {
                var occupiedSpace = document.getElementById("block_" + i)
                occupiedSpace.className = "block"
            }
        }
    }

    const getNewMoveIfOccupied = (move) => {
        if(gameBoard[move] != "") {
            return false
        }
        return true
    }

    const resetGameBoardData = () => {
        addOccupiedClassToDiv()
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

    const printGameBoard = () =>  {
        addOccupiedClassToDiv()
        displayController.printGameBoard(gameBoard)
    }
    

    let insertPlayerChoice = (valueToAddToGameBoard) => gameBoard[valueToAddToGameBoard] = player.returnPlayerPiece() //{

    const insertAIChoice = (valueToAddToGameBoard) => gameBoard[valueToAddToGameBoard] = ai.returnAI()

    return {
        printGameBoard, 
        insertPlayerChoice, 
        sendToPlayer,
        resetGameBoardData,
        insertAIChoice,
        getNewMoveIfOccupied
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
        if(intializeGameBoard.getNewMoveIfOccupied(getValue) === true){
            intializeGameBoard.insertPlayerChoice(getValue)
            let AILoop = false
            while(AILoop === false){
                let AIPiece = Math.floor((Math.random() * 9))
                if(intializeGameBoard.getNewMoveIfOccupied(AIPiece) === true){
                    intializeGameBoard.insertAIChoice(AIPiece)
                    AILoop = true
                }
            }
        }
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
