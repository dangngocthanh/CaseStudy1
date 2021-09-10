class Brick {
    constructor(x,y) {
        this.x=x
        this.y=y
        this.status=true
        this.width=50
        this.height=10
    }
    draw(ctx){
        if(this.status){
            ctx.beginPath()
            ctx.rect(this.x, this.y, this.width, this.height)
            ctx.stroke()
            ctx.closePath()
        }
    }
}