console.log("sid")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "pink"


// document.getElementById("pink").style.backgroundColor = "pink" 

// document.querySelector(".box").style.backgroundColor = "Yellow"
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "Yellow";
});