// Placing and Image Within a Boundary
// Jienan Chen
// May 3, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let chap;
let rectWidth, rectHeight;

function preload(){
  chap = loadImage("assets/verdoux.jpg");
  rectWidth = 345;
  rectHeight = 220;
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  strokeWeight(13);
  rect(15, 15, rectWidth, rectHeight);
  image(chap, 15, 15);
  chap.resize(rectWidth, rectHeight);
  
}
