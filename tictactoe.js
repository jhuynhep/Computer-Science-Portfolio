var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
var button = document.getElementById("resetButton");
var rbutton = document.getElementById("rButton");
var bbutton = document.getElementById("bButton");
var pbutton = document.getElementById("pButton");
var ybutton = document.getElementById("yButton");
var fourbutton = document.getElementById("fourButton");
var threebutton = document.getElementById("threeButton");
var squares = [];
var turnX = false;
var turnsymbolX = false;
var winner = false;
var black = true;
var red = false;
var pink = false;
var yellow = false;
var NumSquares = 3;
// localStorage.setItem("NumSquares", 3);
// fourbutton.addEventListener("click", function(){
//     localStorage.setItem("NumSquares", 4);
//     location.reload();
// });
// var NumSquares = localStorage.getItem("NumSquares");
//fourbutton.addEventListener("click", function(){NumSquares = 4});
var sideLength = mycanvas.width / NumSquares;

//These are the even listners for the reset buttons and the color options
button.addEventListener("click", reset);
rbutton.addEventListener("click", rcolor);
bbutton.addEventListener("click", bcolor);
pbutton.addEventListener("click", pcolor);
ybutton.addEventListener("click", ycolor);


//This will occur if the reset button is pressed
function reset() {
    location.reload();
}

//This will occur if the red button is clicked
function rcolor() {
    red = true;
    black = false;
    pink = false;
    yellow = false;
}

//This will occur if the black button is clicked
function bcolor() {
    black = true;
    pink = false;
    red = false;
    yellow = false;
}

//This will occur if the pick button is clicked
function pcolor() {
    pink = true;
    black = false;
    red = false;
    yellow = false;
}

//This will occur if the yellow button is pressed
function ycolor() {
    yellow = true;
    pink = false;
    black = false;
    red = false;
}

//This is an object constructor that creates the nine squares
function GridPiece(x, y, width, height) {
    this.sideLength = mycanvas.width / NumSquares;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hasmark = false;
    this.distancex = this.x + this.sideLength;
    this.distancey = this.y + this.sideLength;
    this.centerX = this.x + (this.sideLength / 2);
    this.centerY = this.y + (this.sideLength / 2);
    this.xone = this.x + (this.sideLength / 4);
    this.yone = this.y + (this.sideLength / 4);
    this.xtwo = this.x + (this.sideLength * 0.75);
    this.ytwo = this.y + (this.sideLength * 0.75);
    this.draw = function() {
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    };
    var _this = this;
    this.init = function() {
        document.addEventListener("click", function(evt) {
            var mousePos = getMousePos(mycanvas, evt);
            // if(three && !four){
            if (mousePos.x > _this.x && mousePos.x < _this.distancex && mousePos.y > _this.y && mousePos.y < _this.distancey) {
                if (!_this.hasmark && !winner) {
                    //otherCheckForWin();
                    _this.hasmark = true;
                    if (turnX) {
                        _this.isx = true;
                        _this.iso = false;
                        drawX(_this.xone, _this.yone, _this.xtwo, _this.ytwo, _this.xtwo, _this.yone, _this.xone, _this.ytwo);
                        turnX = false;
                    }
                    else {
                        _this.isx = false;
                        _this.iso = true;
                        _this.isosymbol = true;
                        _this.issymbolo = true;
                        _this.isdowno = true;
                        drawCircle(_this.centerX, _this.centerY, _this.sideLength / 4);
                        turnX = true;
                    //   unique();
                    //     turnsymbolX = true;
                    //     if(turnX){
                    //         otherCheckForWin();
                    //         //otherUnique();
                    //         //otherCheckForWin();
                    //     }
                        
                        
                        //unique();
                        // otherUnique();
                        
                    }
                }  
            }
            // }
            //all();
            //checkForWin();
        });
        document.addEventListener("click",function(){
            //otherCheckForWin();
            dO();
        });
        document.addEventListener("click",function(){
            duO();
            //unique();
        });
        document.addEventListener("click",function(){
            rO();
            //unique();
        });
        document.addEventListener("click",function(){
            ddO();
            //unique();
        });
        document.addEventListener("click",function(){
            dX();
        });
        document.addEventListener("click",function(){
            duX();
        });
        document.addEventListener("click",function(){
            ddX();
        });
        document.addEventListener("click",function(){
            rX();
        });
        //all();
    };
    this.init();
    
}

function down(i,j) {
    
    if (squares[j][i].isx && squares[j + 1][i].isx && squares[j + 2][i].isx) {
        mycanvas.style.backgroundColor = "#2D9CC2";
    }
}

function diagonalDown(i,j){
    if(squares[j][i].isx && squares[j + 1][i + 1].isx && squares[j + 2][i + 2].isx){
        mycanvas.style.backgroundColor = "#2D9CC2";
    }
}

function diagonalUp(i,j){
    if(squares[j][i].isx && squares[j + 1][i - 1].isx && squares[j + 2][i - 2].isx){
        mycanvas.style.backgroundColor = "#2D9CC2";
    }
}

function right(i,j){
    if(squares[j][i].isx && squares[j][i + 1].isx && squares[j][i + 2].isx){
        mycanvas.style.backgroundColor = "#2D9CC2";
    }
}

function downO(i,j) {
    if(squares[j][i].iso && squares[j + 1][i].iso && squares[j + 2][i].iso){
        mycanvas.style.backgroundColor = "#EFE6F2";
    }
}

function diagonalDownO(i,j){
    if(squares[j][i].iso && squares[j + 1][i + 1].iso && squares[j + 2][i + 2].iso){
        mycanvas.style.backgroundColor = "#EFE6F2";
    }
}

function diagonalUpO(i,j){
    if(squares[j][i].iso && squares[j + 1][i - 1].iso && squares[j + 2][i - 2].iso){
        mycanvas.style.backgroundColor = "#EFE6F2";
    }
}

function rightO(i,j){
    if(squares[j][i].iso && squares[j][i + 1].iso && squares[j][i + 2].iso){
        mycanvas.style.backgroundColor = "#EFE6F2";
    }
}

function dO(i,j){
    for(var j = 0; j < squares.length; j++){
        for(var i = 0; i< squares[j].length; i++){
            downO(i,j);
        }
    }
}

function duO(){
    for(var j = 0; j < squares.length; j++){
        for(var i = 0; i< squares[j].length; i++){
            diagonalUpO(i,j);
        }
    }
}

function ddO(){
    for(var j = 0; j < squares.length; j++){
        for(var i = 0; i< squares[j].length; i++){
            diagonalDownO(i,j);
        }
    }
}
function rO(){
    for(var j = 0; j < squares.length; j++){
        for(var i = 0; i< squares[j].length; i++){
             rightO(i,j);
        }
    }
}

function duX(){
     for(var j = 0; j < squares.length; j++){
        for(var i = 0; i< squares[j].length; i++){
            diagonalUp(i,j);
        }
     }
}

function dX(){
     for(var j = 0; j < squares.length; j++){
        for(var i = 0; i< squares[j].length; i++){
            down(i,j);
        }
     }
}

function ddX(){
     for(var j = 0; j < squares.length; j++){
        for(var i = 0; i< squares[j].length; i++){
            diagonalDown(i,j);
        }
     }
}

function rX(){
    for(var j = 0; j < squares.length; j++){
        for(var i = 0; i< squares[j].length; i++){
            right(i,j);
        }
     }
}
threebutton.addEventListener("click", function(){
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    NumSquares = 3;
    sideLength = mycanvas.width / NumSquares;
    squares.length = 0;
for(var j = 0 ; j < NumSquares; j++) {
        squares.push([]);
        for (var i = 0; i < NumSquares; i++) {
            var piece = new GridPiece(i * sideLength, j * sideLength, sideLength, sideLength);
            squares[j].push(piece);
            squares[j][i].draw();
        }
    }
});

//This is a for loop that draws the items in the array j is the row and i is the column
fourbutton.addEventListener("click", function(){
//    reset();
    //squares.clear();
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    NumSquares = 4;
    sideLength = mycanvas.width / NumSquares;
    squares.length = 0;
    for(var j = 0 ; j < NumSquares; j++) {
        squares.push([]);
        for (var i = 0; i < NumSquares; i++) {
            var piece = new GridPiece(i * sideLength, j * sideLength, sideLength, sideLength);
            squares[j].push(piece);
            squares[j][i].draw();
        }
    }
});



//This is a function that creates the circles that go in the boxes    
function drawCircle(x, y, r) {
    if (red) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
    }
    if (black) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    if (pink) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.strokeStyle = "#FF9999";
        ctx.stroke();
    }
    if (yellow) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.strokeStyle = "#FFCC66";
        ctx.stroke();
    }
}

//This is the function that draws all of the Xs in the boxes
function drawX(x1, y1, e1, e2, x2, y2, e3, e4) {
    if (red) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(e1, e2);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(e3, e4);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
    }
    if (black) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(e1, e2);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(e3, e4);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    if (pink) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(e1, e2);
        ctx.strokeStyle = "#FF9999";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(e3, e4);
        ctx.strokeStyle = "#FF9999";
        ctx.stroke();
    }
    if (yellow) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(e1, e2);
        ctx.strokeStyle = "#FFCC00";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(e3, e4);
        ctx.strokeStyle = "#FFCC00";
        ctx.stroke();
    }
}

//This gets the position of the mouse.
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}