// Planting Trees
// Jienan Chen
// May 30, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Tree {
  constructor (x, y, d, c){
    this.x = x;
    this.y = y;
    this.diameter = d;
    this.colour = c;
  }
  display(){
    noSmooth();
    ellipseMode(CENTER);
    stroke(this.colour);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(this.colour); 
  }
}

let trees = [];
let numOfTrees;

let grass;

function preload(){
  grass = loadImage("grassland.png");
}

function setup() {
  numOfTrees = random(7,21);
  createCanvas(800, 800);
  for (let i = 0; i < numOfTrees; i++) {
    let someTree = new Tree(random(width + 7), random(height - 7), random(25, 100), "green");
    trees.push(someTree);
  }
}

function draw() {
  background(grass);
  for (let i = 0; i< trees.length; i++) {
    trees[i].display();
  }
}
