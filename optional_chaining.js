console.log("optional chaining");

let obj = {
  person:{
    name: "Muhammad shah",
    // age:23,
    // street:{
    //     address:{
    //         phone:3434344322,
    //     }
    // }
  },
  arr:[1,2,3,4,5],
  func:()=>{
    console.log("yayy! function called")
  },

}
let personObj = 'person'
console.log(obj?.[personObj])
console.log(obj?.arr?.[3])
console.log(obj?.func?.())
obj?.func?.()
console.log(typeof obj2 !== 'undefined' && obj2?.person?.name)

// console.log(obj2?.person) // non-existing root pe work nhi krta 
// obj.person.subject = "Science"
// // console.log(obj.person.name); // Uncaught TypeError
// console.log(obj.person && obj.person.name); // Uncaught Error


// console.log(obj?.person?.subject)
// console.log(obj?.person?.street?.address?.phone);
