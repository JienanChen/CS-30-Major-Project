// Rectangle with Image Inside 
// JIenan Chen
// May 3, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let chaplAl;
let rectX, rectY, rectWidth, rectHeight;

function preload(){
  chapAl = loadImage("assets/albert-einstein-and-charlie-chaplin.jpeg");
}

function setup() {
  createCanvas(500, 500);
  rectX = random(0, 400);
  rectY = random(0, 345);
  rectWidth = random(25, 75);
  rectHeight = random(15, 50);
  noLoop();
}

function draw() {
  background(220);
  rect(rectX, rectY, rectWidth, rectHeight);
  image(chapAl, rectX, rectY);
  chapAl.resize(rectWidth, rectHeight);
}
