// bouncing Ball 

//canvas setup
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 600;
cnv.height = 800;

//  Ball Array
let ball = [];

// Event listener / function
document.addEventListener("keydown", keydownHandler)

function keydownHandler(event) {
 if (event.keyCode === 39) {
    ball.pop();
 } else if (event.keyCode === 37) {
    ball.push(NewBall());
 }
}

// call animation loop
requestAnimationFrame(draw);


function draw() {
    //Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Move and Draw all Bubbles
    for (let i = 0; i < ball.length; i++) {
        MoveBall(ball[i]);
        DrawBall(ball[i]);
     
    }

    requestAnimationFrame(draw)
}

// Ball's variables
function NewBall(InitX, InitY, InitR, InitV, InitG) {
    return {
        x: randomInt(10.5, 590),
        y: 780,
        r: 15,
        v: 0,
        g: -11
    }
}