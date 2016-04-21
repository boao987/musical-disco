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

var Ball = {
    
    xcor : 0,
    ycor : 0,
    radius : 0,
    dx : 0,
    dy : 0,
    color : 0,
    
    display : function(){
        var ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ball.setAttribute("cx", this.xcor);
        ball.setAttribute("cy", this.ycor);
        ball.setAttribute("r", this.radius);
        ball.setAttribute("fill", "white");
        ball.setAttribute("stroke", "black");
        svg.appendChild(ball);
    },
    
    
    ball : function(){
        this.xcor = Math.random(svg.getAttribute("width"));
        this.ycor = Math.random(svg.getAttribute("height"));
        this.radius = Math.random(35);
        this.dx = Math.random(3);
        this.dy = Math.random(3);
    },
    
    act : function(){
        this.display();
        this.isCollide();
        this.move();
    },
    
    move : function(){
        this.xcor += this.dx;
        this.ycor += this.dy;
    },
    
    isCollide : function(){
        if(this.xcor<=0 || this.xcor >= svg.getAttribute("width") - this.radius){
            this.dx = this.dx * -1;
        }
        if(this.ycor<=0 || this.ycor >= svg.getAttribute("height") - this.radius){
            this.dy = this.dy * -1;
        }
    },
}

main();