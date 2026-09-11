console.log("JavaScript Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

for (let i = 0; i < 100; i++) {
     console.log(a+i);
}

let obj = {
    name: "Ramesh",
    role: "Programmer",
    company: "Nothing One AI"
}

for (const key in obj) {
    const element = obj[key];
    console.log(element)

    console.log(key)
}

for(const c of "Sidharth") {
    console.log(c)
}

let i = 0;
while(i<7){
    console.log(i);
    i++;
}

let j = 1;
do {
    console.log(j)
    j++;
} while (j<7);