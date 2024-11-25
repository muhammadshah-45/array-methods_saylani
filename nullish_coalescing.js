let obj = {
    
}

let msg = `Your score is ${obj.score || 10}`;
let msgwithNullish = `Your score is ${obj.score ?? 10}`
console.log(msg);
console.log(msgwithNullish)

console.log(undefined ?? 20)
console.log(null ?? 40)