// const slidshow = document.querySelector('.slideshow');
// setInterval(function(){
//     let firsticon = slidshow.firstElementChild;
//     firsticon.classList.add("fade-out");
//     const third = slidshow.children[2];
//     third.classList.add('light');
//     third.previousElementSibling.classList.remove("light");
//     setTimeout(() => {
//        slidshow.removeChild(firsticon); 
//        slidshow.appendChild(firsticon)
//        setTimeout(() => {
//          firsticon.classList.remove("fade-out")
//        }, 500);
//     }, 500);    

    
// }, 400);

const slideshow = document.querySelector(".slideshow");
setInterval(function(){
    let icon1 = slideshow.firstElementChild;
    icon1.classList.add('faded-out');
    let icon3 = slideshow.children[3];
    icon3.classList.add("light");
    icon3.previousElementSibling.classList.remove("light");
    setTimeout(() => {
         slideshow.removeChild(icon1);
         slideshow.appendChild(icon1)
         setTimeout(() => {
             icon1.classList.remove('faded-out');
         }, 500);
    }, 500);
           
},3000)