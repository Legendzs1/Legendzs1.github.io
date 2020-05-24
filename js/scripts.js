
const gameBoardFactory = () => {
    let _x = 0
    this.gameBoard = [
        [''],[''],[''],
        [''],[''],[''],
        [''],[''],['']
    ]
    let _userChoosenPiece = ""
    let _userAIPiece = ""

    const _showGameBoard = () => {
        let playArea = document.getElementById("playArea")
        let choosePiece = document.getElementById("choosePiece")
        playArea.style.display = "grid"
        choosePiece.style.display = "none"
        
    }

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

    const playerPiece = (clicked) => {
        checkBoardForOccupiedSpace()
        _userChoosenPiece = clicked
        AIPiece()
        _showGameBoard()
    }

    const AIPiece = () => {
        if(_userChoosenPiece === "X") {
            _userAIPiece = "O"
        }
        else {
            _userAIPiece = "X"
        }
    }

    const printGameBoard = () =>  gameBoard.forEach((gameBoardPiece) => {
        document.getElementById("block_"+_x).innerHTML = gameBoardPiece
        _x++
    },_x = 0)
    
    const resetGameBoard = () => {
        let playArea = document.getElementById("playArea")
        let choosePiece = document.getElementById("choosePiece")
        playArea.style.display = "none"
        choosePiece.style.display = "flex"
        gameBoard = [
            [''],[''],[''],
            [''],[''],[''],
            [''],[''],['']
        ]
    }

    
    let insertPlayerChoice = (x) => gameBoard[x] = _userChoosenPiece

    return {
        printGameBoard, 
        insertPlayerChoice, 
        resetGameBoard,
        playerPiece
    }
}

const intializeGameBoard = gameBoardFactory()

function sendUserChoiceToFactory(e) {
    let storeE = e.id
    // returns the value of the dom element
    let clicked = true
    let getValue = document.getElementById(storeE).getAttributeNode("value").value
    if(clicked) {
        clicked = false
        intializeGameBoard.insertPlayerChoice(getValue)
        //intializeGameBoard.insertPlayerChoice(Math.floor((Math.random() * 9) ))
        intializeGameBoard.printGameBoard()
    }
    
}
function sendUserPieceToFactory(e) {
    let storeUserPieceID = e.id
    intializeGameBoard.playerPiece(storeUserPieceID)
}

function callResetBoard() {
    intializeGameBoard.resetGameBoard()
    intializeGameBoard.printGameBoard()
}

intializeGameBoard.resetGameBoard()
