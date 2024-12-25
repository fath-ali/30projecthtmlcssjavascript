let cardbtn = document.querySelector('.card-btn')
cardbtn.addEventListener('click',function(){
    let container = document.querySelector(".container")
    container.classList.add('change')
    setTimeout(function(){
        container.classList.remove('change')
    },3000)
})