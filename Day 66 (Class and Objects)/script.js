// let obj = {
//     a:1,
//     b:"sidharth"
// }
// console.log(obj)

// let animal ={
//     eats: true
// };

// let rabbit={
//     jumps: true
// }

// rabbit.__proto__ = animal; // rabbit inherits from animal

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created....")
    }
    eats(){
        console.log("Animal eats")
    }
    junps(){
        console.log("Animal jumps")
    }
}


class Lion extends Animal{ 
    constructor(name){
        super(name) // calling parent class constructor
        console.log("Lion object is created....")
    }
    eats(){
        super.eats() // calling parent class method
        console.log("Lion eats meat")
    }
}

let a = new Animal("Dog") // Object is created
console.log(a)

let l = new Lion("Sheru") // Object is created
console.log(l)