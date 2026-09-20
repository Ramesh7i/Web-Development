let arr = [1,3,5,7,11,13];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }

// console.log(newArr)

let newArr = arr.map((e)=>{
    return e**2
})
console.log(newArr)

const graterThenSeven = (e) => {
    if(e>7){
        return true
    }
    return false
} 

console.log (newArr.filter(graterThenSeven))

let arr2 = [1,3,4,6,7,8]

const red = (a, b) => {
    return a+b
}

console.log(arr2.reduce(red))

let bhu = Array.from("Sunny")
console.log(bhu)