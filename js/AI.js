const AI = () => {
    let _AIPiece = "X"

    const returnAI = () => {return (_AIPiece)}

    let getAIPiece = (piece) => _AIPiece = piece

    return {
        returnAI,
        getAIPiece
    }
}