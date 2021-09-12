class Brick {
    constructor() {
        this.status = true
        this.width = 50
        this.height = 10
        this.ctx=document.getElementById('MyCanvas').getContext('2d')
    }

    draw(x, y) {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'white'
        this.ctx.rect(x, y, this.width, this.height)
        // this.x+=60
        this.ctx.fill()
        this.ctx.closePath()
        // this.x+=50
    }
}
