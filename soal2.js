const fibonacci = (n) => {
    var out = ""
    var arr = []
    var i = 0
    while (i<n+1) {
        if (i<=1) {
            arr[i] = i
            out += `${arr[i]} `
        } else {
            arr[i] = arr[i-1] + arr[i-2]
            out += `${arr[i]} `
        }
        i++
    }
    return out
}

console.log(fibonacci(4))