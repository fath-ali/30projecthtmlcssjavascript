let links = document.querySelectorAll('.navbar-link');
links.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault()
        links.forEach(function(link){
            link.className = "navbar-link";

        });
        link.classList.add('change');
        console.log(link.previousElementSibling.classList.add('nextchange'));
        
        
    })
})
