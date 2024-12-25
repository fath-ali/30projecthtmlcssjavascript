const dropdownBg = document.querySelector('.dropdown-bg')
let array = Array.from(document.querySelectorAll('.nav-item'))
array.forEach(function(item){
    item.addEventListener('mouseover',function(){
        dropdownBg.style.opacity = 1;
        dropdownBg.style.visibility = 'visible'
        dropdownBg.style.width = getComputedStyle(item.lastElementChild).width;
        dropdownBg.style.height =getComputedStyle(item.lastElementChild).height;
        dropdownBg.style.top = `${item.lastElementChild.offsetTop} px`
        dropdownBg.style.left =   `${item.lastElementChild.offsetleft} px`
    })
    item.addEventListener('mouseout',function(){
        dropdownBg.style.opacity =0;
        dropdownBg.style.visibility ="hidden"
    })
    
})
