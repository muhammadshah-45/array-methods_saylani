console.log("promises");

// const GITHUB_API = 'https://api.github.com/users/muhammadshah-45'

// const user = fetch(GITHUB_API);

// console.log(user)

// user.then((data)=>{
//     console.log(data);
// })

const cart = ["shoes",'pants','kurta']

//Producer 
// const createOrder = (cart)=>{
//     const pr= new Promise((resolve,reject)=>{
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not valid")
//             reject(err)
            
//         }
//         //Logic for createOrder
//         const orderId = "2545";
//         if(orderId){
//             setTimeout(() => {
                
//                 resolve(orderId)
//             }, 3000);
//         }
//     })
    
//     return pr;
// }
// const promise = createOrder(cart);
// console.log(promise)
// promise.then((orderId)=>{
//     console.log(orderId)
// }).catch((error)=>{
//     console.log(error)
// })

// function validateCart(cart){
//     return false;  
// }
// setTimeout(() => {
//     console.log(promise)
    
// }, 3000);


const createOrder = (cart)=>{
    const pr= new Promise((resolve,reject)=>{
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err)
            
        }
        //Logic for createOrder
        const orderId = "2545";
        if(orderId){
            setTimeout(() => {
                
                resolve(orderId)
            }, 3000);
        }
    })
    
    return pr;
}
 createOrder(cart)
 .then((orderId)=>{
    console.log(orderId);
    return orderId;
})
.then((orderId)=>{
    return proceedToPayment(orderId); // return promise itself
})
.then((paymentInfo)=>{
    console.log(paymentInfo)
})
.then((orderId)=>{
   return orderRecieved(orderId);
})
.then((orderRecipt)=>{
    console.log(orderRecipt)
}).catch((error)=>{  
    console.log(error)
})

function proceedToPayment(orderId){
    return new Promise((resolve,reject)=>{
        resolve("Payment Successful");
    })
}
function orderRecieved(orderId){
   return new Promise((resolve,reject)=>{
       resolve("Order recieved successfully")
   })
}
function validateCart(cart){
    return true;  
}
// setTimeout(() => {
//     console.log(promise)
// }, 3000);
// What is promise?

// `The promise object as a placeholder which will be filled later with a value untill we recieve a value from asynchronous operation `