const grayColor = document.querySelector('.gray-heart');
console.log(grayColor);

const redColor = document.querySelector('.red-heart');
console.log(redColor);

grayColor.addEventListener('click',function(){
    redColor.classList.add('animate')
    redColor.classList.add('fill-color');  
})
redColor.addEventListener("click",function(){
    redColor.classList.remove("animate");
    redColor.classList.remove("fill-color");
})