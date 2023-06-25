var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var nasaMarsImagesArray = ["mars.gif","mars1.jpeg","mars2.jpeg","mars3.jpeg","mars4.jpeg"];
 var randomNumber = Math.floor(Math.random() * 4)
console.log(randomNumber)
var roverWidth=100;
var roverHeight=90;

var backgroundImage=nasaMarsImagesArray[randomNumber];
console.log("backgroundImage =" + backgroundImage);
var roverImage="rover.png";

var roverX=10;
var roverY=10;
var backgroundImgTag;
var roverImgTag
function add(){
  var  backgroundImgTag=new Image()
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src=backgroundImage;

   var roverImgTag = new Image() 
   roverImgTag.onload= uploadrover;
   roverImgTag.src= roverImage;
}
function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(roverImgTag,roverX,roverY, roverWidth, roverHeight);
}
window.addEventListener("keydown", myKeyDown);



function myKeyDown(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed)
    if (keyPressed == '38'){
        up();
        console.log("cima");
    }
    if (keyPressed == '40'){
        down();
        console.log("baixo");
    }
    if (keyPressed == '37'){
        left();
        console.log("esquerda");
    }
    if (keyPressed == '39'){
        right();
        console.log("direita");
    }
}
function up(){
    if(roverY>=0){
        roverY=roverY-10;
        console.log("Quando direcional cima for pressionada, x=" + roverX + "| y=" +roverY)
        uploadBackground();
        uploadrover();
    
    }
}
function down(){
    if(roverY<=500){
        roverY=roverY+10;
        console.log("Quando direcional baixo for pressionada, x=" + roverX + "| y=" +roverY)
        uploadBackground();
        uploadrover();
    
    }
}
function left(){
    if(roverX>=0){
        roverX=roverX-10;
        console.log("Quando direcional esquerda for pressionada, x=" + roverX + "| y=" +roverY)
        uploadBackground();
        uploadrover();
    
    }
}
function right(){
    if(roverX<=700){
        roverX=roverX+10;
        console.log("Quando direcional direita for pressionada, x=" + roverX + "| y=" +roverY)
        uploadBackground();
        uploadrover();
    
    }
}