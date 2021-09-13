class Circle {
    constructor() {
        this.x = 260
        this.y = 430
        this.color = 'red'
        this.radius = 10
        this.speed=5
        let a=Math.floor(Math.random()*2)
        if (a===0){
            this.flagMove='topRight'
        }
        else {
            this.flagMove='topLeft'
        }
    }
    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle=this.color
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }
    moveTopRight(){
        this.x+=this.speed
        this.y-=this.speed
    }
    moveTopLeft(){
        this.x-=this.speed
        this.y-=this.speed
    }
    moveDownRight(){
        this.x+=this.speed
        this.y+=this.speed
    }
    moveDownLeft(){
        this.x-=this.speed
        this.y+=this.speed
    }
    move(){
        if (this.x+this.radius>=650){
            if ( this.flagMove==='topRight') {
                this.flagMove = "topLeft"
            }else{
                this.flagMove = "downLeft"
            }
        }
        if (this.x-this.radius<=0){
            if (this.flagMove==='topLeft'){
                this.flagMove='topRight'
            }else{
                this.flagMove = "downRight"
            }
        }
        if (this.y-this.radius<=0){
            if (this.flagMove==='topLeft'){
                this.flagMove='downLeft'
            }else{
                this.flagMove='downRight'
            }
        }
        switch (this.flagMove){
            case "topLeft":
                this.moveTopLeft()
                break
            case "topRight":
                this.moveTopRight()
                break
            case "downLeft":
                this.moveDownLeft()
                break
            case "downRight":
                this.moveDownRight()
                break
        }
    }
    check(brick){
        if (this.x + this.radius >= brick.x
            && this.x-this.radius <= brick.x + brick.width &&
            this.y + this.radius >=brick.y &&
            this.y + this.radius < brick.y+brick.height){
            brick.status=false
            // console.log('va cham')
            if (this.flagMove==='downRight'){
                this.flagMove='topRight'
            }else
                this.flagMove='topLeft'
        }
        if (this.y-this.radius-brick.height===brick.y &&
            this.x + this.radius >= brick.x
            && this.x-this.radius <= brick.x + brick.width
        ){
            brick.status=false
            if (this.flagMove==='topRight'){
                this.flagMove='downRight'
            }else
            this.flagMove='downLeft'
        }
    }
}
