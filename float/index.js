
for(let i = 0; i < 100;i++){
    let div = document.createElement('div');
    div.className = `sph sphere${i}`
div.style.animationDelay = (Math.random()*100)+"s";
div.style.position = "absolute";
div.style.left = `${Math.random()*window.innerWidth}px`
div.style.top = "-80px"
document.querySelector('body').appendChild(div)

}
