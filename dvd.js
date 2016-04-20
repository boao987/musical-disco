var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var start = document.getElementById("animate");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");

var frameID;

var DVD = function(){
    
    var xcor,ycor,width,height,dx,dy;
    
    var add = function(){
        
    };
    var move = function(){
        xcor += dx;
        ycor += dy;
    };
    var isCollide = function(){
        if(xcor<=0 || xcor >= c.width - width){
            dx = dx * -1;
        };
    }
}