var svg = document.getElementById("mysvg");

var add = document.getElementById("add");
var remove = document.getElementById("remove");

var Balls=[];

var Ball = function() {
    
    var xcor,ycor,radius,color,dx,dy;
    
    color = ["LightSeaGreen", "PaleGoldenRod", "RosyBrown", "Silver", "Violet"]    
    radius = Math.random() * 35 + 15;
    xcor = Math.floor(Math.random() * (svg.getAttribute("width") - 2 * radius + 1) + radius);
    ycor = Math.floor(Math.random() * (svg.getAttribute("height") - 2 * radius + 1) + radius);
    dx = Math.random() * 3 + 1;
    dy = Math.random() * 3 + 1;
    
        var ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ball.setAttribute("cx", xcor);
        ball.setAttribute("cy", ycor);
        ball.setAttribute("r", radius);
        ball.setAttribute("fill", color[Math.floor(Math.random()*5)]);
        ball.setAttribute("stroke", "black");
        svg.appendChild(ball);

    
    var move = function(){
        xcor += dx;
        ycor += dy;
        isCollide();
        ball.setAttribute("cx", xcor);
        ball.setAttribute("cy", ycor);  
    };
    
    var isCollide = function(){
        if( xcor - radius <= 0 || xcor + radius >= svg.getAttribute("width") ){
            dx = dx * -1;
        }
        if( ycor - radius <= 0 || ycor + radius >= svg.getAttribute("height") ){
            dy = dy * -1;
        }
        
    };
    
    var act = function(){
        //display();
        move();
    };
    
    return {
        xcor : xcor,
        ycor : ycor,
        radius : radius,
        color : color,
        move : move
    };
};

var addBall = function(){
    var b = Ball()
    Balls.push(b);
    setInterval(b.move,16);
};

var removeBall = function(){
    var c = document.getElementsByTagName("circle");
    if(c[0]){
      Balls.splice(0,1);
      c[0].remove();
  }
};

add.addEventListener("click", addBall);
remove.addEventListener("click", removeBall);
