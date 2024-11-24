

let images = document.querySelectorAll(".image");

right.addEventlistner("click",()=>{
    if(slideNumber < images.length){
        slide.style.transform= 
        slideNumber++
    }else{
        slide.style.transform = `translateX(0px)`
        slideNumber++;
    }
})