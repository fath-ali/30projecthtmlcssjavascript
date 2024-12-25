const emoji = document.getElementById('emoji');
const emo = [
    " 😊never give up",
    "❤️ never be disoppemtn",
    "😁 please hard work to change your live",
    "👌 men never cry but they do the best",
    "😒 please be yourselves",
    "🤣 talent widthout hard work is nothing",
    "🤒 fuck you bro",
];


emoji.addEventListener("mouseover",function(){
    emoji.innerHTML = emo[Math.floor(Math.random() * emo.length)]
    
})