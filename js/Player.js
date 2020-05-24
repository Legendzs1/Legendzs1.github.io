const Player = () => {
    let userChoosenPiece = "" //X or O
    const returnPlayerPiece = () => {return(userChoosenPiece)}

    const playerPiece = (clickedID) => {
        userChoosenPiece = clickedID
    }


    return {
        returnPlayerPiece,
        playerPiece
    }
}
