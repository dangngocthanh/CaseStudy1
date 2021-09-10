let ctx = document.getElementById('MyCanvas').getContext('2d')
let rect = new Rectangular()
let circ = new Circle()
let brick = []
let x = 40
let y = 30
for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
        x += 50
        let d = Math.floor(Math.random() * 20)
        if (d > 3) {
            brick[i].push(new Brick(x, y))
        } else {
            continue
        }
    }
    y += 10
}
rect.draw(ctx)
circ.draw(ctx)
function BrickDraw() {
    for (let i = 0; i < brick.length; i++) {
        for (let j = 0; j < brick[i].length; j++) {
            brick[i][j].draw(ctx)
            console.log('a')
        }
    }
}
BrickDraw()
window.addEventListener('keydown', function (event) {
    let key = event.keyCode;
    switch (key) {
        case 37:
            rect.moveLeft();
            clear()
            rect.draw(ctx)
            break;
        case 39:
            rect.moveRight();
            clear()
            rect.draw(ctx)
            break;
    }
})

function clear() {
    ctx.clearRect(0, 0, 620, 500)
}

function moveBall() {
    if (circ.y < 500) {
        clear();
        BrickDraw()
        circ.move()
        circ.draw(ctx)
        rect.draw(ctx)
        rect.check(circ)
        for (let i = 0; i < brick.length; i++) {
            for (let j = 0; j < brick[i].length; j++) {
                circ.check(brick[i][j])
            }
        }

    } else {
        ctx.font = '50px serif '
        ctx.fillText('Game Over', 130, 250)
    }
    window.requestAnimationFrame(moveBall)

}

moveBall()
