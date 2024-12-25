let halfcircles = document.querySelectorAll('.half-circle');
let halfcirceltop = document.querySelector('.half-circle-top');
let progressbar = document.querySelector('.progressbar-circle');
window.addEventListener('scroll',function(){
    let pageViewportHeight =window.innerHeight;
    let pageHeight = document.documentElement.scrollHeight;
    const scrolledPortion = window.pageYOffset;
    let scrolledPortionDegree =(scrolledPortion / (pageHeight - pageViewportHeight) * 360);

    const scrolledPortionpercent = Math.floor(scrolledPortionDegree/360 * 100);    
    progressbar.textContent = `${scrolledPortionpercent}`;
    halfcircles.forEach(function(half){
        half.style.transform = `rotate(${scrolledPortionDegree} deg)`;
        if(scrolledPortionDegree>=180){
            halfcircles[0].style.transform =`rotate(100deg)`
            halfcirceltop.style.opacity ='0';

        }else{
            halfcirceltop.style.opacity ='1'
        }
        
    })
})

