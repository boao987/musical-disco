var svg = document.getElementById("mysvg");

var start = document.getElementById("animate");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");
var add = document.getElementById("add");


var frameID;
var Balls=[];

var main = function(){
    for(var i = 0; i<3; i++){
        Balls[i]=Ball.ball();
    }
    
    for(var i = 0; i<Balls.length; i++){
        Balls[i].act();
    }
    
    
}

var Ball = function(){
    
    var xcor,ycor,radius,dx,dy,color;
    
    var display = function(){
        var ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ball.setAttribute("cx", xcor);
        ball.setAttribute("cy", ycor);
        ball.setAttribute("r", radius);
        ball.setAttribute("fill", "white");
        ball.setAttribute("stroke", "black");
        svg.appendChild(ball);
    };
    
    
    var ball = function(){
        xcor = Math.random(svg.getAttribute("width"));
        ycor = Math.random(svg.getAttribute("height"));
        radius = Math.random(35);
        dx = Math.random(3);
        dy = Math.random(3);
    };
    
    var act = function(){
        display();
        isCollide();
        move();
    };
    
    var move = function(){
        xcor += dx;
        ycor += dy;
    };
    
    var isCollide = function(){
        if(xcor<=0 || xcor >= svg.getAttribute("width") - radius){
            dx = dx * -1;
        }
        if(ycor<=0 || ycor >= svg.getAttribute("height") - radius){
            dy = dy * -1;
        }
    };
}

main();