console.log('this is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("I am done")
            resolve("Sidhath")
        }, 3000);

    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("I am done with nothing")
            resolve("Sidhath 2two")
        }, 3000);

    }
})

// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

let p3 = Promise.race([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
})