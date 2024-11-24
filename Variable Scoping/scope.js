console.log("variable scoping")


let globalVar = "I'm global!";  

function displayGlobal() {  
    var name = "Muhammad"
    console.log(globalVar); // Accessible here  
}  

displayGlobal(); // Output: I'm global!  
console.log(globalVar); // Output: I'm global!

