
// import {car ,name } from "./p1.js"

// console.log(car)

// name()

const myArray = [1,2,3,4]

const obj = new Set(myArray)

console.log(obj.add(9))


let myMap = new Map([
    ["a1","Ajay"],
    ["age",23]
])

myMap.set("a2","Vikas")

console.log(myMap.get("a1"))
console.log(myMap)

for(let x of myMap){
    console.log( x)
}

myMap.forEach((element,index )=> {
    console.log(element)
    console.log("index",index)
});
