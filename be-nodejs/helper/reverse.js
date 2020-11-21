const reverse = (character) => {
    const long = character.length
    var result = ""
    for(i=1 ; i<=long ; i++){
        result += character[long-i]
    }
    return result
}
module.exports = reverse