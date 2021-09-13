class Rectangular {
    constructor() {
        this.x = 220
        this.y = 450
        this.color = 'Blue'
        this.flagMove = 'left'
        this.height = 10
        this.width = 80
    }

    moveLeft() {
        this.x -= 20
    }

    moveRight() {
        this.x += 20
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.fillStyle = 'white'
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }

    move() {
        if (this.x <= 0) {
            this.flagMove = 'right'
        } else if (this.x + this.width >= 620) {
            this.flagMove = 'left'
        }
    }

    check(circle) {
        if (circle.x + circle.radius >= this.x
            && circle.x - circle.radius <= this.x + this.width &&
            circle.y + circle.radius >= this.y &&
            circle.y + circle.radius < this.y + this.height) {
            console.log('va cham')
            if (circle.flagMove === 'downRight') {
                circle.flagMove = 'topRight'
            } else
                circle.flagMove = 'topLeft'
        }

    }
}

window.addEventListener('mousemove', function (event) {
    let key = document.getElementById('MyCanvas').getBoundingClientRect()
    rect.x = event.clientX - key.left - rect.width / 2;
    if (event.clientX > 610) {
        rect.x = 570
    }
    rect.draw()
})