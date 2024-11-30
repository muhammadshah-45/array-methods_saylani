// function x(){
//     console.log("x")
// }

// function y(x){
//     x();
// }

// y(x)

const radius =[3,1,2,4] ;

const area = function (radius){
    return Math.PI * radius * radius;
}

const calculate = (radius,logic)=>{
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
        
    }
    return output;
}
console.log(calculate(radius,area))
const calculateArea = function (radius){
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push((Math.PI * radius[i] * radius[i]).toFixed(2) );
        
    }
    return output;
}

console.log(calculateArea(radius))

const calculateCircumference = function (radius){
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(2 * (Math.PI * radius[i] ).toFixed(2) );
        
    }
    return output;
}
console.log(calculateCircumference(radius));

const calculateDiameter = function(radius){
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(2 * (radius[i] ).toFixed(2) );
        
    }
    return output;
}
console.log(calculateDiameter(radius))
