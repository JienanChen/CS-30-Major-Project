// Loading Image Practice
// Jienan Chen
// ay 3, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let chap;

function preload(){
  chap = loadImage("verdoux.jpg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(chap);
}
