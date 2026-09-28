let button = document.getElementById("btn")

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click",()=>{
    // alert("I was  clicked")

    document.querySelector(".box").innerHTML = "<b>Now that's something</b> umm.. nothing"
})

button.addEventListener("contextmenu", ()=>{
    alert("Double click Choutu")
})

// button.addEventListener("keydown", (e)=>{
//     console.log(e)
// })

document.addEventListener("keydown", (e)=>{
    // console.log(e)
    
    console.log(e, e.key)
})