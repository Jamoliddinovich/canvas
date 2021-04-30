const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
context.save()
context.translate(canvas.width/2, canvas.height)

function drawTree(length,width,degree){
if(length>20){
    context.beginPath();
context.lineWidth=width;
context.strokeStyle='rgba(255,122,11,0.91)';

context.moveTo(0,0);
context.bezierCurveTo(0, -70, -20, -30, 0, -length);

context.stroke();
context.save();
context.translate(0,-length)
context.rotate(Math.PI / 180 * degree);
drawTree(length*0.8,width*0.8,degree);
context.rotate(-2*Math.PI / 180 * degree);
drawTree(length*0.8,width*0.8,degree);
context.restore();}
else{
    context.save();
    context.translate(0,-length)
    context.fillStyle='rgba(0,255,0,0.5)';
    context.beginPath();
    context.arc(0, 0, 30,0, 2);
    context.arc(2, 8, 30,0, 2);
    context.arc(7, 16, 30,0, 2);
    context.fill();
    context.restore();
}
}

drawTree(140,25,35)