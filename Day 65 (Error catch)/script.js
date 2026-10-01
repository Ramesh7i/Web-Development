let a = prompt("Enter a number : ")

let b = prompt("Enter a number : ")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){
    let x =1;
try{
    console.log("Addition is ", sum*x)
    return true
   
} catch(error){
    console.log("Error aa gya hai hehehe")
    return false
} 
finally{
    console.log("Files are being closed and db connection is being closed")
}
}

let c = main()