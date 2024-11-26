/**
 * What is async?
 * What is await ?
 * 
 */
//*Async:- (always return a promise) async is a keyword that is used to create async function
const p = new Promise((resolve,reject)=>{
    resolve("Promise resolved value!!")
})
// async function getData(){
// //    return "Namaste";
//       return p;
// }

// const dataPromise = getData();

// p.then((response)=> console.log(response))  // p will be stored in dataPromise 

/**
 * what is await? 
 */
// await:- await is a keyword that can only be used inside a async function.
//async and await combo is used to handle promises.

const promise = new Promise((resolve,reject)=>{
    resolve("Promise has resolved.")
})


async function handleData() {
    const value = await promise;
    console.log(value);
}

function getData(){
  promise.then(res => console.log(res))
}

getData()
