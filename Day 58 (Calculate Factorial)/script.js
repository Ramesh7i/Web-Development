let a = 6

function fact(num) {
    let arr = Array.from(Array(num+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a*b
    }, 1)
    return c
}

function facFor(num){
    let fac = 1;
    for(let index = 1; index <= num; index++){
        fac = fac*index;
    }
    return fac
}

console.log(facFor(a))
console.log(fact(a))