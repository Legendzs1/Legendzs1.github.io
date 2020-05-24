const player = (() => {
    let _userChoosenPiece = ""
    const returnPlayerPiece = () => {return(_userChoosenPiece)}

    return {
        returnPlayerPiece,
    }
})();

export default player