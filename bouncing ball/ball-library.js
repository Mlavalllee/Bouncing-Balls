// library of Ball functions

//Draw Balls
function DrawBall(ABall) {
    fill("red");
    circle(ABall.x, ABall.y, ABall.r, "fill");
}

// Draw Bouncing Balls

    function BouncingMoveBall(ABall) {
        if (ABall.y >= 785) {
            ABall.v = -10;
        } 
        ABall.v = ABall.v + 0.1;
        ABall.y += ABall.v;
    }

// Balls with Loss of energy
function GravityMoveBall(ABall) {
    if (ABall.y >= 785) {
        ABall.g = ABall.g + 1;
        ABall.v = ABall.g;

    } 
    ABall.v = ABall.v + 0.1;
    ABall.y += ABall.v;
}

function MoveBallSideWays(ABall) {
    if(ABall.x >= 585) {
        ABall.s = -4;
    }else if (ABall.x <= 15) {
        ABall.s = 4;
    }
    ABall.x += ABall.s;
}

function RemoveBall(ABall) {
    if (ABall.y >= 840) {
        gravityball.shift(0, 1);
    }
}