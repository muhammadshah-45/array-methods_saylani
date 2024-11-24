function outerFunction() {  
    let outerVariable = "I'm from the outer function!";  

    function innerFunction() {  
        console.log(outerVariable); // Accessing the outer variable  
    }  

    return innerFunction; // Returning the inner function  
}  

const closureFunction = outerFunction(); // outerFunction is called  
closureFunction(); // Output: I'm from the outer function!