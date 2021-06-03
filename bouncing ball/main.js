// bouncing Ball 

//canvas setup
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 600;
cnv.height = 800;

//  Ball Array
let bouncingball = [];
let gravityball = [];
let bounceonmouse = [];
let Gravityonmouse = [];

// Event listener / function
document.addEventListener("mousemove", MouseMovementHandler);

function MouseMovementHandler (event) {
    document.innerHTMl = cnv;
    let x = event.clientX;
    let y = event.clientY;
    console.log(x, y);
}

document.addEventListener("keydown", keydownHandler)

function keydownHandler(event) {
    if (event.keyCode === 39) {
        gravityball.pop();
    } else if (event.keyCode === 37) {
        gravityball.push(NewBall());
    }else if (event.keyCode === 81) {
        bouncingball.push(NewBall());
    }else if (event.keyCode === 87) {
        bouncingball.pop();
    }else if (event.keyCode) {
        bounceonmouse.push();
    }else if (event.keyCode) {
        bounceonmouse.pop();
    }else if (event.keyCode) {
        Gravityonmouse.push();
    }else if (event.keyCode) {
        Gravityonmouse.pop();
    }
}
// call loop
requestAnimationFrame(ClearCanvas);
requestAnimationFrame(Draw);

// Draw Balls functions
function Draw() {
    // Move and Draw Balls with Gravity
    for (let i = 0; i < gravityball.length; i++) {
        GravityMoveBall(gravityball[i]);
        MoveBallSideWays(gravityball[i]);
        DrawBall(gravityball[i]);
        RemoveBall(gravityball[i]);
    }
    // Move and Draw bouncing Balls
    for (let i = 0; i < bouncingball.length; i++) {
        BouncingMoveBall(bouncingball[i]);
        DrawBall(bouncingball[i]);
    }
    requestAnimationFrame(Draw);
}

// function to Clear Canvas 

function ClearCanvas() {
    //Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    requestAnimationFrame(ClearCanvas);
}

// Ball's variables
function NewBall(InitX, InitY, InitR, InitV, InitG, InitS) {
    return {
        x: randomInt(10.5, 590),
        y: 785,
        r: 15,
        v: -11,
        g: -11,
        s: 4
    }
}