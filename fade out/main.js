let arrow = document.getElementById('arrow');
window.addEventListener('scroll',function(){
    let position = window.scrollY;
    if(position<=5){
        arrow.classList.toggle('fase-in');
        arrow.classList.toggle('fade-out')
    }
})