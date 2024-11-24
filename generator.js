console.log("generators")

function *test(){
    yield "First"; //yield means pause
    yield "Second";
    yield "third";
}

let g = test();
console.log(g.next())


// function *generator(){
//     let result = yield;

//     console.log(result)
// }
// let a = generator();
// a.next();
// a.next(30)
// a.next(40)


// function *generatorA(){
//     let result = [yield,yield,yield];

//     console.log(result)
// }
// let b = generatorA();
// b.next();
// b.next(30)
// b.next(40)
// b.next(3444)


function *generator(){
 
 yield "Node"
  yield  "Javascript"
 yield   "React"

   
}
let a = generator();
console.log(a.next().value);

console.log([...a])



let n = "student";

let obj = {
    [n] : "Muhammad",
    'detail show'(){
        console.log(this.student)
    }
}

obj['detail show']()