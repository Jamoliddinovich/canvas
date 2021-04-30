const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.translate(canvas.width/2,canvas.height/2);
function drawSnow(branch,length,width,alpha) {
   if(length>40){
 context.save();
 context.lineWidth=width;
 context.strokeStyle='white';
 context.moveTo(0,0);
 context.bezierCurveTo(-10, -20, -90, -49,0, -length/2);
 
 context.bezierCurveTo(-10, -20, 90, -49,0, -length);
 context.stroke();
 context.translate(0,-length) 

  context.rotate(-Math.PI / 180 * alpha/2);
 for(let i =0;i<branch;i++){
drawSnow(branch*1.08,length*0.7,width*0.9,alpha*1.1)
context.rotate((Math.PI / 180 )* alpha/(branch-1)); 
}
context.restore();

   }
   else{
       return
   }

  }
  let x = 3
  for(let i = 0;i <x;i++){
    drawSnow(3,100,4,90)
    context.rotate(2*Math.PI /x);
  }

