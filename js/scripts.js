const displayController = DisplayController()
const player = Player()
const ai = AI()

const gameBoardFactory = () => {

    this.winner = false
    this.remainingPieces = 8
    this.gameBoard = [
        '','','',
        '','','',
        '','',''
    ]

    this.winningIndexTuples = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

/*     const checkForWinner = (gameBoard, gamePiece) => {
        if(noRemainingPiecesExist() === true){
            displayController.displayTie()
        } 
        else {
            winningIndexTuples.forEach(tuple => {
            const possibleWinningRow = tuple.map(index => gameBoard[index]);
        
            if (possibleWinningRow.every(piece => piece === gamePiece)) {
                displayWinnerGamePiece(gamePiece)
            }
            });
        }
    }
 */

    const checkForWinner = (gameBoard,gamePiece) => {
        for (const tuple of winningIndexTuples) {
            const possibleWinningRow = tuple.map(index => gameBoard[index]);
            if (possibleWinningRow.every(piece => piece === gamePiece)) {
                displayWinnerGamePiece(gamePiece)
                winner = true
            }
            else if(noRemainingPiecesExist() === true){
                displayController.displayTie()
            }
    }
}

 

    const displayWinnerGamePiece = (gamePiece) => {
        if(gamePiece === player.returnPlayerPiece()) {
            displayController.displayWinner(player.returnUserName())
        }
        else {
            displayController.displayWinner(ai.returnAI())
        }
    }


    const _subtractRemainingPieces = () => {
        remainingPieces--
    }
    const noRemainingPiecesExist = () => {return remainingPieces === 0}

    const setRamainingPieces = () => {
        remainingPieces = 8
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
        winner = false
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
    
    const returnGameBoard = () => {
        return gameBoard
    }

    let insertPlayerChoice = (valueToAddToGameBoard) => {
        gameBoard[valueToAddToGameBoard] = player.returnPlayerPiece() 
        checkForWinner(returnGameBoard(),player.returnPlayerPiece())
        _subtractRemainingPieces()
    }

    const insertAIChoice = (valueToAddToGameBoard) => {
        if(winner=== false) {
            gameBoard[valueToAddToGameBoard] = ai.returnAI()
            checkForWinner(returnGameBoard(),ai.returnAI())
            _subtractRemainingPieces()
        }
    }
    
    return {
        printGameBoard, 
        insertPlayerChoice, 
        sendToPlayer,
        resetGameBoardData,
        insertAIChoice,
        getNewMoveIfOccupied,
        noRemainingPiecesExist,
        setRamainingPieces,
        checkForWinner,
        returnGameBoard
    }

}

const intializeGameBoard = gameBoardFactory()

function sendBlockChoiceToGameBoard(e) {
    let storeE = e.id
    // returns the value of the dom element
    let clicked = true
    let getValue = document.getElementById(storeE).getAttributeNode("value").value
    if (clicked) {
        clicked = false
        if (intializeGameBoard.getNewMoveIfOccupied(getValue) === true) {
            intializeGameBoard.insertPlayerChoice(getValue)
            if (intializeGameBoard.noRemainingPiecesExist() === false) {
                let AILoop = false
                while (AILoop === false) {
                    let AIPiece = Math.floor((Math.random() * 9))
                    if (intializeGameBoard.getNewMoveIfOccupied(AIPiece) === true) {
                        intializeGameBoard.insertAIChoice(AIPiece)
                        AILoop = true
                    }
                }
            }
        }
        intializeGameBoard.printGameBoard()
    }
}

function sendUserNameToPlayer() {
    const userForm = document.forms["userName"]
    let userName = userForm.elements["name"].value
    player.setUserName(userName)
    displayController.hideUserName()
    displayController.displayUserPieceChoice()
    userForm.reset()
    return false
}

function sendUserPieceToPlayer(e) {
    let storeUserPieceID = e.id
    intializeGameBoard.sendToPlayer(storeUserPieceID)
}

function callResetBoard() {
    intializeGameBoard.resetGameBoardData()
    intializeGameBoard.setRamainingPieces()
    intializeGameBoard.printGameBoard()
}

intializeGameBoard.resetGameBoardData()

