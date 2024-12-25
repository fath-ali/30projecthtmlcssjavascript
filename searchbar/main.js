let searchbar = document.querySelector(".search-icon");
console.log(searchbar);

let searchcontainer = document.querySelector('.search-input-wrapper');
let searchinput = document.querySelector('.search-input input');
let closeicon = document.querySelector('.search-input');
console.log(closeicon);

searchbar.addEventListener('click',function(){    
    searchbar.classList.add('change')
    searchcontainer.classList.add("change")
    setTimeout(() => {
         searchinput.focus();
    }, 2000);
})
closeicon.addEventListener('click',function(){
    searchbar.classList.remove('change');
    searchcontainer.classList.remove('change')
})
