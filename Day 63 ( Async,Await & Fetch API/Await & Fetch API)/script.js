// async function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

async function getData(){
  let x = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  let data = await x.json()
  console.log(data)
  return 455
}


async function main() {
    console.log("Loading Modules")
    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

        console.log(data)

        console.log("Process data")
        
        console.log("task2")
    }

main()

// data.then((v) => {
//     console.log(data)

//     console.log("Process data")
    
//     console.log("task2")

// })