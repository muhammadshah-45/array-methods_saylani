setTimeout(() => {
    console.log("timer")
}, 7000);

function x(y){
 console.log("x")
 y()
}
x(function y(){
    console.log("y")
})

function attachEvent(){
    let count = 0;
    document.getElementById('click-me-btn').addEventListener("click",function name(){
        var h1 = document.createElement("h1");
        h1.textContent = "Muhammad here "
        h1.style.color = "green";
        h1.style.background = "yellow";
        h1.style.padding = "12px";
        document.body.appendChild(h1)
        console.log(++count)
    })
}
attachEvent()



