var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");

var circles = [];
var gameOver = false;
var win = false

//This variable creates that main circle being controlled by users.
var box = {
    xPos: 250,
    yPos: 490,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: false,
    move: function() {
        console.log(box.goLeft);
        if (box.goLeft && box.xPos > 0 && !gameOver && !win) {
            box.xPos = box.xPos - 4;
        }
        if (box.goRight && box.xPos < mycanvas.width - 10 && !gameOver && !win) {
            box.xPos += 4;
        }
        if (box.goUp && box.yPos > 0) {
            box.yPos -= 4;
        }
        if (box.goDown && box.yPos < mycanvas.height - 10) {
            box.yPos += 4;
        }
        console.log(box.xPos);
    },
    draw: function() {
        ctx.beginPath();
        ctx.arc(box.xPos, box.yPos, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.stroke();
    }
};

//This function is an object constructor that creates the falling circles that are moving at different speeds 
function Circle(x, radius) {
    for (var j = 0; j < circles.length; j++) {
        var speed = j;
    }
    this.x = x;
    this.radius = radius;
    this.y = 0 - this.radius;
    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    };
    this.move = function() {
        this.y = this.y + (speed / 10);
    };
}

//This function controls the amount of circles that are falling on the screen
function myFunction() {
    setInterval(function() {
        if(!gameOver && !win){
            circles.push(new Circle(Math.random() * 500, 10));
        }
    }, 240);
}

myFunction();

//This tells the program what to do if the user is pressing down on the keys
document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 37) {
        box.goLeft = true;
    }
    if (evt.keyCode === 38) {
        box.goUp = true;
    }
    if (evt.keyCode === 39) {
        box.goRight = true;
    }
    if (evt.keyCode === 40) {
        box.goDown = true;
    }

});

//This tells the program what to do if the user is releasing the keys
document.addEventListener("keyup", function(evt) {
    if (evt.keyCode === 37) {
        box.goLeft = false;
    }
    if (evt.keyCode === 38) {
        box.goUp = false;
    }
    if (evt.keyCode === 39) {
        box.goRight = false;
    }
    if (evt.keyCode === 40) {
        box.goDown = false;
    }
});

//This function checks to see if the controlling circle and the rest of the falling circles are colliding
function isColliding(circle) {
    var dx = circle.x - box.xPos;
    var dy = circle.y - box.yPos;
    return Math.sqrt((dx * dx) + (dy * dy));
}

//This function is a loop which draws all of the circles and tells the program what to do when circles are colliding and the game is over.
function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    box.move();
    box.draw();
    for (var i = 0; i < circles.length; i++) {
        circles[i].move();
        circles[i].draw();
        if (isColliding(circles[i]) < 19) {
            //circles = [];
            gameOver = true;
            box.xPos = -500;
        }
    }
    if (gameOver) {
        ctx.font = "30px Arial";
        ctx.fillText("Game Over", 170, 250);
    }
    if(circles.length === 200){
        win = true;
        box.xPos = -600;
        ctx.font = "30px Arial";
        ctx.fillText("You Win!", 170, 250);
    }
    ctx.font = "30px Arial";
    ctx.fillText(i, 450, 30);
    window.requestAnimationFrame(gameLoop);
}
gameLoop();
