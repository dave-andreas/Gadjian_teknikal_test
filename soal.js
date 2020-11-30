const segitiga = (n) => {
    var out = ""
    var i = 1
    while (i <= n){
        out += `${kiri(i,n)}${kanan(i-1)}\n`
        i++
    }
    return out
}

const kiri = (baris,n) => {
    var out = ""
    var i = 0
    while (i<n) {
        if (n-i <= baris) {
            out += "*"
        } else {
            out += " "
        }
        i++
    }
    return out
}

const kanan = (baris) => {
    var out = ""
    var i = 0
    while (i < baris) {
        out += "*"
        i++
    }
    return out
}

console.log(segitiga(10))