const fibonacci = (n) => {
    var out = ""
    var arr = []
    var i = 0
    while (i<n+1) {
        if (i<=1) {
            arr[i] = i
        } else {
            arr[i] = arr[i-1] + arr[i-2]
        }
        i++
    }
    var j = 0
    while (j<arr.length) {
        if (j===arr.length-1) {
            out += `${arr[j]}`
        } else {
            out += `${arr[j]} `
        }
        j++
    }
    return out
}

console.log(fibonacci(1))