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
    setTimeout(() => {
        resolve("Promise has resolved.")
    }, 5000);
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 2 has resolved.")
    }, 10000);
})

async function handlePromise() {
    console.log("hello Shah")
    //JS Engine was waiting for promise to resolved 
    const value = await promise;
    console.log("Promise 1")
    console.log(value);
    //both promise were print at after interval time.
    const value2 = await promise2;
    console.log("Promise 2");
    console.log(value2)
}
handlePromise()
// function getData(){
//    //JS Engine will not wait for promise to be resolved 
//   promise.then(res => console.log(res))
//   console.log("Muhammad shah")
// }

// getData()


//Difference between handling the (Promise using async await) && (the normal older way)
const GITHUB_API = 'https://api.github.com/users/muhammadshah-45'


async function handleFetchData() {
   const data = await fetch(GITHUB_API);
   //fetch()=> it gives you a response 
   const jsonValue =await data.json();

  console.log(jsonValue)
}
// fetch(GITHUB_API).then(res =>res.json()).then(result => console.log(result));
handleFetchData();