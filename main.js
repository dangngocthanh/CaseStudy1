let ctx = document.getElementById('MyCanvas').getContext('2d')
let rect = new Rectangular()
let circ = new Circle()
let brick = new Brick()
let brickArr = [[]]
let a=10
let b=10
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

draw(brickArr)

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
                    circle.score+=10
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
                    circle.score+=10
                    if (circle.flagMove === 'topRight') {
                        circle.flagMove = 'downRight'
                    } else
                        circle.flagMove = 'downLeft'
                }
                if(circle.x+circle.radius===x &&
                circle.y+circle.radius>=y &&
                circle.y-circle.radius<=y+10){
                    brickArr[i][j] = false
                    circle.score+=10
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
                    circle.score+=10
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

function background() {
    ctx.beginPath()
    ctx.fillStyle = 'Black'
    ctx.rect(0, 0, 650, 500)
    ctx.closePath()
}
function score(circle){
    ctx.beginPath()
    ctx.font = '30px serif '
    ctx.fillStyle='black'
    let scr=""+circle.score+""
    ctx.fillText('Score:', 670, 100)
    ctx.fillText(scr,750,100)
    ctx.fill()
    ctx.closePath()

}
function win() {
    clear()
    background()
    ctx.font = '50px serif '
    ctx.fillText('You Win', 200, 250)
}

window.addEventListener('mousemove', function (event) {
    let key = document.getElementById('MyCanvas').getBoundingClientRect()
    rect.x = event.clientX - key.left - rect.width / 2;
    if(event.clientX>610){
        rect.x=570
    }
    rect.draw()
})

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
        score(circ)
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
