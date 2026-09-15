let random = Math.random()
console.log(random)
let a = prompt("Enter first number :")
let b = prompt("Enter sec number :")
let c = prompt("Enter Opertion :")

let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if (random > 0.1) {
    // perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
} else {
    // perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}