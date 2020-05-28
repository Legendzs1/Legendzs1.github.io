const Player = () => {
    let userChoosenPiece = "" //X or O
    let userName = ""

    const setUserName = (name) => {
        userName = name
    }

    const returnUserName = () => {return(userName)}

    const returnPlayerPiece = () => {return(userChoosenPiece)}

    const playerPiece = (clickedID) => {
        userChoosenPiece = clickedID
    }


    return {
        returnPlayerPiece,
        playerPiece,
        setUserName,
        returnUserName
    }
}
