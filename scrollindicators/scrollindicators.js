let indicators = document.querySelector('.scroll-indicators .progress');
let scrollhight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(scrollhight);

window.addEventListener('scroll',function(){
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollhight) * 100;
    indicators.style.width = `${scrolled}%`
    
})
