let btn = document.getElementById('btn');
let hex = document.getElementById('hexCode');
btn.addEventListener('click',function(){
    let letters = "0123456789ABCDEF";   
    let color   = "#";
    for(i =0;i< 6 ;i++){
        color +=letters[Math.floor(Math.random() * 16)]    
    }
    hex.innerHTML = color;
    document.body.style.backgroundColor = color;
})
