const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x:undefined,
    y:undefined,
}
let Particles = [];

window.addEventListener('mousemove',(e)=>{
mouse.x = e.x;
mouse.y = e.y; 
for(let i = 0;i <1;i++){
    Particles.push(new Particle(mouse.x,mouse.y,Math.random()*10+10,Math.random()*5+2,Math.random()*2*Math.PI))
}
console.log(Particles)
})
window.addEventListener('resize',()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
})

class Particle{
    constructor(x,y,radius,speed,alpha){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.alpha = alpha;
        this.color = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${1})`;
        this.opacityspeed = 0.01;
        this.opacity = 1;
    }
    draw(){
        context.fillStyle= this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, Math.PI / 180 * 0, Math.PI / 180 * 360);
        context.fill();
    }
    update(){
this.x = mouse.x;
this.y = mouse.y;
    }
}

function init(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    Particles.forEach((part,i)=>{
          part.x += part.speed*Math.sin(part.alpha);
          part.y += part.speed*Math.cos(part.alpha);
          part.opacity-=part.opacityspeed;
          part.draw();
             Particles = Particles.filter((p)=>{
                 return p.opacity>=0
          }
        )})
        requestAnimationFrame(init)
} 
init();