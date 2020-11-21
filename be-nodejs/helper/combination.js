const combination = (n,r) => {
    if (n<r) {
        return 0
    }
    var out = factorial(n) / ( factorial(r) * factorial(n-r) )
    return out
}

function factorial (a) {
    var out = 1
    var i = a
    while (i > 0) {
        out *= i
        i--
    }
    return out
}

module.exports = combination