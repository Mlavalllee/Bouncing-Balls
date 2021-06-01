// library of Ball functions

// call function
Ball();

//Global Variable
//let Gravity = 0.1;

// Generate 50 Ballflakes
function Ball() {
    for (let i = 0; i < 1; i++) {
    ball.push(NewBall());
    }
}

// draw / move snowflake
function DrawBall(ABall) {
    fill("red");
    circle(ABall.x, ABall.y, ABall.r, "fill");
}

function MoveBall(ABall) {
    if (ABall.y >= 785) {
        ABall.g = ABall.g + 1;
        ABall.v = ABall.g;

    }
    for (let i = 0; i < ball.length; i++) {
        if(ABall.g == 0) {
            ball.splice(i, 1)
            i--;
        }
    }

    ABall.v = ABall.v + 0.1;
    ABall.y += ABall.v;
}