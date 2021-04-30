const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

context.fillRect(0, 0, canvas.width, canvas.height);
let startAngle = 0
let endAngle = 360
let ball = {
    x: 80,
    y: 80,
    Xspeed:1,
    Yspeed: 1
}
let ball2 = {
    x: 280,
    y: 280,
    Xspeed: 2,
    Yspeed: 2
}

function update() {
    if (ball.x < 80 || ball.x > canvas.width - 80) {
        ball.Xspeed = -ball.Xspeed
    }
    if (ball.y < 80 || ball.y > canvas.height - 80) {
        ball.Yspeed = -ball.Yspeed
    }
    if (ball2.x < 80 || ball2.x > canvas.width - 80) {
        ball2.Xspeed = -ball2.Xspeed
    }
    if (ball2.y < 80 || ball2.y > canvas.height - 80) {
        ball2.Yspeed = -ball2.Yspeed
    }
if(Math.sqrt(Math.pow(ball.x-ball2.x,2)+Math.pow(ball.y-ball2.y,2))<160){
    ball.Xspeed = -ball.Xspeed
    ball.Yspeed = -ball.Yspeed
    ball2.Xspeed = -ball2.Xspeed
    ball2.Yspeed = -ball2.Yspeed
}
    ball2.x += ball2.Xspeed
    ball2.y += ball2.Yspeed
    ball.x += ball.Xspeed
    ball.y += ball.Yspeed
}

function anime() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    update()
    for (let i = 0; i <= 80; i++) {
        context.beginPath();
        context.fillStyle = `rgba(${(i*255/100)},${(i*255/100)},${(i*25/100)},${Math.random()})`;
        context.arc((ball.x + i * 50 / 100), (ball.y + i * 50 / 100), (100 - i) * 80 / 100, Math.PI / 180 * startAngle, Math.PI / 180 * endAngle);
        context.fill();
        context.closePath();
    }
    for (let i = 0; i <= 100; i++) {
        context.beginPath();
        context.fillStyle = `rgba(${(i*25/100)},${(i*255/100)},${(i*25/100)},${Math.random()})`;
        context.arc((ball2.x + i * 50 / 100), (ball2.y + i * 50 / 100), (100 - i) * 80 / 100, Math.PI / 180 * startAngle, Math.PI / 180 * endAngle);
        context.fill();
        context.closePath();
    }
   
    
    
    requestAnimationFrame(anime)
}
anime()