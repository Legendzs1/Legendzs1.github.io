const displayController = DisplayController()
const player = Player()
const ai = AI()

const gameBoardFactory = () => {

    this.remainingPieces = 8
    this.gameBoard = [
        [''],[''],[''],
        [''],[''],[''],
        [''],[''],['']
    ]

    const _subtractRemainingPieces = () => {
        remainingPieces--
    }
    const checkRemainingPieces = () => {
        if(remainingPieces === 0) {
            return true
            //remainingPieces = 8//WILL BE BUG WHERE IF RESETBOARD IT DOESNT GO BACK UP
            //FIGURE OUT HOW TO CHANGE BACK TO 8
        }

        return false
    }

    const setRamainingPieces = () => {
        
    }

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
    

    let insertPlayerChoice = (valueToAddToGameBoard) => {
        gameBoard[valueToAddToGameBoard] = player.returnPlayerPiece() 
        _subtractRemainingPieces()
    }

    const insertAIChoice = (valueToAddToGameBoard) => {
        gameBoard[valueToAddToGameBoard] = ai.returnAI()
        _subtractRemainingPieces()
    }

    return {
        printGameBoard, 
        insertPlayerChoice, 
        sendToPlayer,
        resetGameBoardData,
        insertAIChoice,
        getNewMoveIfOccupied,
        checkRemainingPieces
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
            if(intializeGameBoard.checkRemainingPieces()=== false)
            {
                let AILoop = false
                while(AILoop === false){
                    let AIPiece = Math.floor((Math.random() * 9))
                    if(intializeGameBoard.getNewMoveIfOccupied(AIPiece) === true){
                        intializeGameBoard.insertAIChoice(AIPiece)
                        AILoop = true
                    }
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
