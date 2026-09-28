console.log("Ramesh is a hacker")
console.log("piti-piti is a hecker")

setTimeout(() => {
    console.log("Inside settimeout")
}, 2000);

setTimeout(() => {
    console.log("Inside settimeout 2")
}, 0);

console.log("the end")

const fn = () => {
  console.log("Something")
}


const callback = (arg, fn)=>{
    console.log(arg)
    fn()
}
const loadScript = (src, callback)=>{
    const sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("Sunny", fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)