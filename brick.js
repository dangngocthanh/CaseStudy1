class Brick {
    constructor() {
        this.width = 50
        this.height = 10
        this.ctx=document.getElementById('MyCanvas').getContext('2d')
    }

    draw(x, y) {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'white'
        this.ctx.rect(x, y, this.width, this.height)
        this.ctx.fill()
        this.ctx.closePath()
    }
}
