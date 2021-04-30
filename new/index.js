const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const mouse = {
    x: null,
    y: null,
    radius: 200
}
window.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
})
let particleArray
context.fillStyle = "white"
context.font = "27px sans-serif"
context.fillText("To'lqinbek", 0, 20)
context.strokeStyle = 'white';
let Aharf = context.getImageData(0, 0, 200, 200)
console.log(Aharf)
class Particle {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 3
        this.density = 10
        this.baseX = x
        this.baseY = y
    }
    draw() {
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        context.closePath()
        context.fill()
    }
    update() {
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let dl = Math.sqrt(dx * dx + dy * dy)
        let forceX = dx / dl
        let forceY = dy / dl
        if (dl < mouse.radius) {
            this.x -= forceX*3
            this.y -= forceY*3
        } else {
            if (this.baseX !== this.x) {
                let xi = this.baseX - this.x
                this.x += xi / 20
            }
            if (this.baseY !== this.y) {
                let yi = this.baseY - this.y
                this.y += yi / 20
            }

        }

    }
}

function connect() {
    for (let i = 0; i < particleArray.length; i++) {
        for (let j = i; j < particleArray.length; j++) {
            let dx = particleArray[i].x - particleArray[j].x
            let dy = particleArray[i].y - particleArray[j].y
            let dl = Math.sqrt(dx * dx + dy * dy)
            if (dl < 20) {
                console.log(dl)
                context.beginPath()
                context.lineWidth = 2;
                context.moveTo(particleArray[i].x, particleArray[i].y)
                context.lineTo(particleArray[j].x, particleArray[j].y)
                context.stroke()

            }
        }
    }
}

function init() {
    particleArray = []
    for (let i = 0; i < Aharf.height; i++) {
        for (let j = 0; j < Aharf.width; j++) {
            if (Aharf.data[j * 4 * Aharf.width + i * 4 + 3] > 128) {
                particleArray.push(new Particle(i * 10 + 100, j * 10 + 100))
            }
        }
    }
}
init()

function animate() {

    context.clearRect(0, 0, canvas.width, canvas.height)
    particleArray.forEach(element => {
        element.draw()
        element.update()
    });
    connect()
    requestAnimationFrame(animate)
}
animate()