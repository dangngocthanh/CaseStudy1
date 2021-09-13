let ctx = document.getElementById('MyCanvas').getContext('2d')
let rect = new Rectangular()
let circ = new Circle()
let brick = new Brick()
let brickArr = [[]]
let a=10
let b=10
let score=0
rect.draw(ctx)
circ.draw(ctx)
for (let i = 0; i < 10; i++) {
    brickArr[i] = []
    for (let j = 0; j < 10; j++) {
        let d = Math.floor(Math.random() * 30)
        if (d <= 4) {
            brickArr[i][j] = false
        } else {
            brickArr[i][j] = true
        }
    }
}
console.log(brickArr)
draw(brickArr)
function background() {
    ctx.beginPath()
    ctx.fillStyle = 'Black'
    ctx.rect(0, 0, 650, 500)
    ctx.fill()
    ctx.closePath()
}
function drawScore(){
    ctx.beginPath()
    ctx.font = '30px serif '
    ctx.fillStyle='black'
    let scr=""+score+""
    ctx.fillText('Score:', 670, 100)
    ctx.fillText(scr,750,100)
    ctx.fill()
    ctx.closePath()
}
function win() {
    clear()
    background()
    ctx.beginPath()
    ctx.font = '50px serif '
    ctx.fillStyle='white'
    ctx.fillText('You Win', 200, 250)
    ctx.closePath()
    drawScore()
}
function clear() {
    ctx.clearRect(0, 0, 850, 500)
}
function moveBall() {
    if (circ.y < 500) {
        clear();
        background()
        ctx.fill()
        rect.draw(ctx)
        draw(brickArr)
        circ.move()
        circ.draw(ctx)
        rect.draw(ctx)
        rect.check(circ)
        drawScore()
        checkBrick(circ, brickArr)
    } else {
        ctx.beginPath()
        ctx.fillStyle='White'
        ctx.font = '50px serif '
        ctx.fillText('Game Over', 200, 250)
        ctx.fill()
        ctx.closePath()
    }
    let count = 0
    for (let i = 0; i < brickArr.length; i++) {
        for (let j = 0; j < brickArr[i].length; j++) {
            if (brickArr[i][j]) {
                count++
            }
        }
    }
    if (count > 0) {
        window.requestAnimationFrame(moveBall)
    } else {
        win()
    }

}

moveBall()
