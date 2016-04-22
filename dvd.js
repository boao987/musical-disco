var svg = document.getElementById("mysvg");

var start = document.getElementById("animate");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");
var add = document.getElementById("add");


var frameID;
var Balls=[];

for(var i = 0; i < 3; i++){
    Balls[i] = Ball;
    
};

var Ball = function() {
    
    var xcor,ycor,radius,color,dx,dy;
    
    var display = function(){
        var ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ball.setAttribute("cx", this.xcor);
        ball.setAttribute("cy", this.ycor);
        ball.setAttribute("r", this.radius);
        ball.setAttribute("fill", "white");
        ball.setAttribute("stroke", "black");
        svg.appendChild(ball);
    };
    
    
        this.xcor = Math.random(svg.getAttribute("width"));
        this.ycor = Math.random(svg.getAttribute("height"));
        this.radius = Math.random(35);
        this.dx = Math.random(3);
        this.dy = Math.random(3);

    var act = function(){
        this.display();
        this.isCollide();
        this.move();
    };
    
    var move = function(){
        this.xcor += this.dx;
        this.ycor += this.dy;
    };
    
    var isCollide = function(){
        if(this.xcor<=0 || this.xcor >= svg.getAttribute("width") - this.radius){
            this.dx = this.dx * -1;
        }
        if(this.ycor<=0 || this.ycor >= svg.getAttribute("height") - this.radius){
            this.dy = this.dy * -1;
        }
    };
    
    return {
        xcor : xcor,
        ycor : ycor,
        radius : radius,
        color : color,
        dx : dx,
        dy : dy,
        act : act()
    };
};


// var Ball = function(){
//     this.xcor = 250;
//     this.ycor = 250;
//     this.radius = 10;
//     this.dx = 1;
//     this.dy = 1;
//     this.ball;
    
//     function move(){
//         this.xcor += this.dx;
//         this.ycor += this.dy;
//         if(this.xcor + this.radius >= 500 || this.xcor <= this.radius){
//             this.dx*=-1;
//         }
//         if(this.ycor + this.radius >= 500 || this.ycor <= this.radius){
//             this.dy*=-1;
//         }
//         this.ball.setAttribute("cx", this.xcor);
//         this.ball.setAttribute("cy", this.ycor);
//     }
    
//     function ball(){
//         this.xcor = Math.random(svg.getAttribute("width"));
//         this.ycor = Math.random(svg.getAttribute("height"));
//         this.radius = Math.random(35);
//         this.dx = Math.random(3);
//         this.dy = Math.random(3);
//         return element();
//     }
    
//     function display(){
//         svg.appendChild(this.element());
//     }
    
//     function act(){
//         this.display();
//         this.move();
//     }
    
//     function element(){
//         this.ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//         this.ball.setAttribute("cx", this.xcor);
//         this.ball.setAttribute("cy", this.ycor);
//         this.ball.setAttribute("r", this.radius);
//         this.ball.setAttribute("fill", "white");
//         this.ball.setAttribute("stroke", "black");
//         return this.ball;
//     }
    
//     return element();

// };

// for(var i = 0;i<=10;i++){
//     Balls[i] = Ball.ball();
//     Ball[i].act();
    
//  //   svg.appendChild(Balls[i]);
// }

// var ballMove = function(){
//     for(var i = 0;i<=svg.children.length;i++){
//         svg.children[i].move();
//     }
//     frameID = window.setInterval(ballMove,10);
// };
// ballMove();
