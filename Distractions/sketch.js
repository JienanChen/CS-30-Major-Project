// Distractions
// Jienan Chen
// June 10, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Distractions {
  constructor(x, y, someWidth,someColour, someImage, someSpeed){
    this.x = x;
    this.y = y;
    this.width = someWidth;
    this.stroke = someColour;
    this.img = someImage;
    this.speed = someSpeed;
  }

  display() {
    rectMode(CENTER);
    imageMode(CENTER);
    strokeWeight(7);
    stroke(this.stroke);
    rect(this.x, this.y, this.width, this.width - 7);
    image(this.img, this.x, this.y, this.width, this.width - 7);
  }

  move() {
    let choice = random(100);
    if (this.x + this.width >= width || this.x <= 0){
      this.x = random(0, width - this.width);
    }
    if (this.y + this.width - 7 >= height || this.y <= 0){
      this.y = random(0,  height - this.width - 7);
    }
    if (choice < 25) {
      //up
      this.y -= this.speed* random(8);
    }
    else if (choice < 50) {
      //down
      this.y += this.speed* random(10);
    }
    else if (choice < 75) {
      //left
      this.x -= this.speed * random(8);
    }
    else {
      //right
      this.x += this.speed * random(10);
    }
  }
}

let distractions = [];
let pouya;

function preload(){
  pouya = loadImage("20180411_154733-(1)-(1)A.png");
}


function setup() {
  choices = ["beige", "black", "orange", "purple", "yellow"];
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i< 100; i++) {
    colour = random(choices);
    let vex = new Distractions(random(width), random(height), random(75, 150), random(choices), pouya, 5);
    distractions.push(vex);
  }

}

function draw() {
    background(220);
  for (let i=0; i<distractions.length; i++) {
    distractions[i].move();
    distractions[i].display();
  }
}