var svg = document.getElementById("mySVG");

var start = document.getElementById("animate");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");

var frameID;

var Ball = function(){
    
    var xcor,ycor,radius,dx,dy,color;
    
    var display = function(){
        var ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ball.setAttribute("cx", xcor);
        ball.setAttribute("cy", ycor);
        ball.setAttribute("r", radius);
        ball.setAttribute("fill", "white");
        ball.setAttribute("stroke", "black");
    };
    
    var ball = function(){
        xcor = Math.random(svg.getAttribute("width"));
        ycor = Math.random(svg.getAttribute("height"));
        radius = Math.random(35);
        dx = Math.random(3);
        dy = Math.random(3);
    };
    var move = function(){
        xcor += dx;
        ycor += dy;
    };
    
    var isCollide = function(){
        if(xcor<=0 || xcor >= c.width - radius){
            dx = dx * -1;
        };
    }
}