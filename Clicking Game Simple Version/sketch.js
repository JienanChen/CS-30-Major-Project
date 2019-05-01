// Simple Version of Clicking Game
// Jienan Chen
// April 11, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let xCor, yCor;
let happy;
let angry;
let squareSize;

function preload(){
  soundFormats("m4a");
  happy = loadSound("assets/happiness.m4a");
  angry = loadSound("assets/Frustrated Noise.m4a");  
}

function setup() {
  createCanvas(400, 400);
  xCor = floor(random(20, 380));
  //console.log("x" + xCor);
  yCor = floor(random(20, 380));
  //console.log("y"+ yCor);
  squareSize = floor(random(30,60));
}

function draw() {
  background(220);
  drawSquare();
}

function drawSquare(){
  stroke(25);
  fill(255);
  rect(xCor, yCor, squareSize, squareSize);
}


function mousePressed(){
  if ((mouseX >= xCor && mouseX <= xCor + squareSize) && (mouseY >= yCor && mouseY <= yCor + squareSize)){
    happy.setVolume(0.3);
    happy.play();
  }
  else{
    angry.setVolume(0.4);
    angry.play();
    xCor = floor(random(40, 360));
    yCor = floor(random(40, 360));
  }
}
