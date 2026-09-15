function nice(name) {
    console.log("Hii" + name + "you are nice")
    console.log("Hii" + name + "you are good")
    console.log("Hii" + name + "you are nothing")
    console.log("Hii" + name + "you are something")
}

nice(" Sidharth ")

nice(" Rehan ")

// console.log("Hii Sunny")
// console.log("Hii Sunny you are nice")
// console.log("Hii Sunny you are  good")

function sum(a,b, c=2) {
    // console.log(a + b)
    return a + b + c
}

// sum(7,8)
result = sum(6,7)
result1 = sum(7,9,8)

console.log("The Sun of number is :", result)
console.log("The Sun of number is :", result1)

const func1 = (x)=>{
    console.log("I am arrow function",x)
}
func1(59);
func1(36);
func1(343);