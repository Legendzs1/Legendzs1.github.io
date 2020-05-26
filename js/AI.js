const AI = () => {
    let _AIPiece = ""

    const returnAI = () => {return (_AIPiece)}

    let getAIPiece = (piece) => _AIPiece = piece

    return {
        returnAI,
        getAIPiece
    }
}