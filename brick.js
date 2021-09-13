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
function draw(brickArr) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (brickArr[i][j]) {
                let x = 50 + i * 55
                let y = 20 * j + 30
                brick.draw(x, y)
            }
        }
    }
}
function checkBrick(circle, brickArr) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (brickArr[i][j]) {
                let x = 50+ i * 55
                let y = 20 * j + 30
                if (circle.x + circle.radius >= x
                    && circle.x - circle.radius <= x + 50 &&
                    circle.y + circle.radius >= y &&
                    circle.y + circle.radius < y + 10) {
                    brickArr[i][j] = false
                    score+=10
                    // console.log('va cham')
                    if (circle.flagMove === 'downRight') {
                        circle.flagMove = 'topRight'
                    } else
                        circle.flagMove = 'topLeft'
                }
                if (circle.y - circle.radius - 10 === y &&
                    circle.x + circle.radius >= x
                    && circle.x - circle.radius <= x + 50
                ) {
                    brickArr[i][j] = false
                    score+=10
                    if (circle.flagMove === 'topRight') {
                        circle.flagMove = 'downRight'
                    } else
                        circle.flagMove = 'downLeft'
                }
                if(circle.x+circle.radius===x &&
                    circle.y+circle.radius>=y &&
                    circle.y-circle.radius<=y+10){
                    brickArr[i][j] = false
                    score+=10
                    // console.log('va cham')
                    if (circle.flagMove === 'topRight') {
                        circle.flagMove = 'topLeft'
                    } else
                        circle.flagMove = 'downLeft'
                }
                if(circle.x-circle.radius===x+50 &&
                    circle.y+circle.radius>=y &&
                    circle.y-circle.radius<=y+10){
                    brickArr[i][j] = false
                    score+=10
                    // console.log('va cham')
                    if (circle.flagMove === 'topLeft') {
                        circle.flagMove = 'topRight'
                    } else
                        circle.flagMove = 'downRight'
                }
            }
        }
    }
}
