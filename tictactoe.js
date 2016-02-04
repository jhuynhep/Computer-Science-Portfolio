var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");
var button = document.getElementById("resetButton");
var rbutton = document.getElementById("rButton");
var bbutton = document.getElementById("bButton");
var pbutton = document.getElementById("pButton");
var ybutton = document.getElementById("yButton");
var onebutton = document.getElementById("oneButton");
var squares = [];
var turnX = false;
var winner = false;
var black = true;
var red = false;
var pink = false;
var yellow = false;
var one = false;

//These are the even listners for the reset buttons and the color options
button.addEventListener("click", reset);
rbutton.addEventListener("click", rcolor);
bbutton.addEventListener("click", bcolor);
pbutton.addEventListener("click", pcolor);
ybutton.addEventListener("click", ycolor);
onebutton.addEventListener("click", obutton);

//These are each of the nine boxes for the grid
var one = new GridPiece(0,0,200,200);
squares.push(one);
var two = new GridPiece(200,0,200,200);
squares.push(two);
var three = new GridPiece(400,0,200,200);
squares.push(three);
var four = new GridPiece(0,200,200,200); 
squares.push(four);
var five = new GridPiece(200,200,200,200);
squares.push(five);
var six = new GridPiece(400,200,200,200);
squares.push(six);
var seven = new GridPiece(0,400,200,200);
squares.push(seven);
var eight = new GridPiece(200,400,200,200);
squares.push(eight);
var nine = new GridPiece(400,400,200,200);
squares.push(nine);

//This will occur if the reset button is pressed
function reset(){
    location.reload();
    one = false
}

//This will occur if the red button is clicked
function rcolor(){
    red = true;
    black = false;
    pink = false;
    yellow = false;
}

//This will occur if the black button is clicked
function bcolor(){
    black = true;
    pink = false;
    red = false;
    yellow = false;
}

//This will occur if the pick button is clicked
function pcolor(){
    pink = true;
    black = false;
    red = false;
    yellow = false;
}

//This will occur if the yellow button is pressed
function ycolor(){
    yellow = true;
    pink = false;
    black = false;
    red = false;
}

function obutton(){
    location.reload();
    one = true;
}

//This is an object constructor that creates the nine squares
function GridPiece(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hasmark = false;
    this.draw = function(){
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    
       /* if(this.hasmark){
            if(this.isx){
                drawX(50, 50, 150, 150, 150, 50, 50, 150);
            }
            else{
                drawCircle(100,100);
            }
        }*/
    };
}


//This is a for loop that draws the items in the array

for(var i = 0; i < squares.length; i++){
    squares[i].draw();
}

//This is a function that creates the circles that go in the boxes    
function drawCircle(x,y){
    if(red){
        ctx.beginPath();
        ctx.arc(x,y,50,0,2 * Math.PI);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
    }
    if(black){
        ctx.beginPath();
        ctx.arc(x,y,50,0,2 * Math.PI);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    if(pink){
        ctx.beginPath();
        ctx.arc(x,y,50,0,2 * Math.PI);
        ctx.strokeStyle = "#FF9999";
        ctx.stroke();
    }
    if(yellow){
        ctx.beginPath();
        ctx.arc(x,y,50,0,2 * Math.PI);
        ctx.strokeStyle = "#FFCC66";
        ctx.stroke();
    }
}

//This is the function that draws all of the Xs in the boxes
function drawX(x1, y1, e1, e2, x2, y2, e3, e4){
    if(red){
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(e1,e2);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2,y2);
        ctx.lineTo(e3,e4);
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
    }
    if(black){
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(e1,e2);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2,y2);
        ctx.lineTo(e3,e4);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    if(pink){
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(e1,e2);
        ctx.strokeStyle = "#FF9999";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2,y2);
        ctx.lineTo(e3,e4);
        ctx.strokeStyle = "#FF9999";
        ctx.stroke();
    }
    if(yellow){
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(e1,e2);
        ctx.strokeStyle = "#FFCC00";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2,y2);
        ctx.lineTo(e3,e4);
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

//This is an event listner of what will happen if the user clicks in each of the boxes
document.addEventListener("click", function(evt){
        var mousePos = getMousePos(mycanvas, evt);
        if (mousePos.x < 200 && mousePos.x > 0 && mousePos.y < 200 && mousePos.y > 0){
            //drawCircle(100,100);
            if(!one.hasmark && !winner){
                one.hasmark = true;
                if(turnX){
                    one.isx = true;
                    drawX(50, 50, 150, 150, 150, 50, 50, 150);
                    turnX = false;
                }
                else{
                    one.isx = false;
                    drawCircle(100,100);
                    turnX = true;
                }
            }
        }
        if (mousePos.x > 200 && mousePos.x < 400 && mousePos.y > 0 && mousePos.y < 200){
           if(!two.hasmark && !winner){
               two.hasmark = true;
               if(turnX){
                   two.isx = true;
                   drawX(250, 150, 350, 50, 250, 50, 350, 150);
                   turnX = false;
               }
               else{
                  two.isx = false;
                  drawCircle(300,100);
                  turnX = true;
               }
           }
        }
        if (mousePos.x > 400 && mousePos.x < 600 && mousePos.y < 200 && mousePos.y > 0){
            if(!three.hasmark && !winner){
                three.hasmark = true;
                if(turnX){
                    three.isx = true;
                    drawX(450, 50, 550, 150, 450, 150, 550, 50);
                    turnX = false;
                }
                else{
                    three.isx = false;
                    drawCircle(500,100);
                    turnX = true;
                }
            }
        }
        if (mousePos.x < 200 && mousePos.x > 0 && mousePos.y < 400 && mousePos.y > 200){
            if(!four.hasmark && !winner){
                four.hasmark = true;
                if(turnX){
                    four.isx = true;
                    drawX(50, 250, 150, 350, 50, 350, 150, 250);
                    turnX = false;
                }
                else{
                    four.isx = false;
                    drawCircle(100,300);
                    turnX = true;
                }
            }
        }
        if (mousePos.x > 200 && mousePos.x < 400 && mousePos.y > 200 && mousePos.y < 400){
            if(!five.hasmark && !winner){
                five.hasmark = true;
                if(turnX){
                    five.isx = true;
                    drawX(250, 250, 350, 350, 250, 350, 350, 250);
                    turnX = false;
                }
                else{
                    five.isx = false;
                    drawCircle(300,300);
                    turnX = true;
                }
            }
        }
        if (mousePos.x > 400 && mousePos.x < 600 && mousePos.y < 400 && mousePos.y > 200){
            if(!six.hasmark && !winner){
                six.hasmark = true;
                if(turnX){
                    six.isx = true;
                    drawX(450, 350, 550, 250, 450, 250, 550, 350);
                    turnX = false;
                }
                else{
                    six.isx = false;
                    drawCircle(500,300);
                    turnX = true;
                }
            }
        }
        if (mousePos.x < 200 && mousePos.x > 0 && mousePos.y > 400 && mousePos.y < 600){
            if(!seven.hasmark && !winner){
                seven.hasmark = true;
                if(turnX){
                    seven.isx = true;
                    drawX(50, 450, 150, 550, 50, 550, 150, 450);
                    turnX = false;
                }
                else{
                    seven.isx = false;
                    drawCircle(100,500);
                    turnX = true;
                }
            }
        }
        if (mousePos.x > 200 && mousePos.x <400 && mousePos.y > 400 && mousePos.y < 600){
            if(!eight.hasmark && !winner){
                eight.hasmark = true;
                if(turnX){
                    eight.isx = true;
                    drawX(250, 450, 350, 550, 250, 550, 350, 450);
                    turnX = false;
                }
                else{
                    eight.isx = false;
                    drawCircle(300,500);
                    turnX = true;
                }
            }
        }
        if (mousePos.x > 400 && mousePos.x < 600 && mousePos.y > 400 && mousePos.y <600){
            if(!nine.hasmark && !winner){
                nine.hasmark = true;
                if(turnX){
                    nine.isx = true;
                    drawX(450, 450, 550, 550, 450, 550, 550, 450);
                    turnX = false;
                }
                else{
                    nine.isx = false;
                    drawCircle(500,500);
                    turnX = true;
                }
            }
        }
        if(one.isx && two.isx && three.isx){
            mycanvas.style.backgroundColor = "#F9D9FD";
            ctx.font = "30px Arial";
            //ctx.fillStyle = "#";
            ctx.fillText("X Wins!", 250, 300);
            winner = true;
        }
        if(four.isx && five.isx && six.isx){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("X Wins!", 250, 300);
            winner = true;
        }
        if(seven.isx && eight.isx && nine.isx){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("X Wins!", 250, 300);
            winner = true;
        }
        if(one.isx && four.isx && seven.isx){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("X Wins!", 250, 300);
            winner = true;
        }
        if(two.isx && five.isx && eight.isx){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("X Wins!", 250, 300);
            winner = true;
        }
        if(three.isx && six.isx && nine.isx){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("X Wins!", 250, 300);
            winner = true;
        }
        if(one.isx && five.isx && nine.isx){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("X Wins!", 250, 300);
            winner = true;
        }
        if(three.isx && five.isx && seven.isx){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("X Wins!", 250, 300);
            winner = true;
        }
        if(!one.isx && !two.isx && !three.isx && one.hasmark && two.hasmark && three.hasmark){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("O Wins!", 250, 300);
            winner = true;
        }
        if(!four.isx && !five.isx && !six.isx && four.hasmark && five.hasmark && six.hasmark){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("O Wins!", 250, 300);
            winner = true;
        }
        if(!seven.isx && !eight.isx && !nine.isx && seven.hasmark && eight.hasmark && nine.hasmark){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("O Wins!", 250, 300);
            winner = true;
        }
        if(!one.isx && !four.isx && !seven.isx && one.hasmark && four.hasmark && seven.hasmark){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("O Wins!", 250, 300);
            winner = true;
        }
        if(!two.isx && !five.isx && !eight.isx && two.hasmark && five.hasmark && eight.hasmark){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("O Wins!", 250, 300);
            winner = true;
        }
        if(!three.isx && !six.isx && !nine.isx && three.hasmark && six.hasmark && nine.hasmark){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("O Wins!", 250, 300);
            winner = true;
        }
        if(!one.isx && !five.isx && !nine.isx && one.hasmark && five.hasmark && nine.hasmark){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("O Wins!", 250, 300);
            winner = true;
        }
        if(!three.isx && !five.isx && !seven.isx && three.hasmark && five.hasmark && seven.hasmark){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("O Wins!", 250, 300);
            winner = true;
        }
        if(one.hasmark && two.hasmark && three.hasmark && four.hasmark && five.hasmark && six.hasmark && seven.hasmark && eight.hasmark && nine.hasmark && !winner){
            mycanvas.style.backgroundColor = "#EFE6F2";
            ctx.font = "30px Arial";
            ctx.fillText("It's a tie!", 250, 300);
        }
    }
);