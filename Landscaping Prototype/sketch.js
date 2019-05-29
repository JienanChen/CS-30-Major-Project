// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Tree {
  constructor (x, y, d){
    this.x = x;
    this.y = y;
    this.diameter = d; 
  }
  display(){
    noSmooth();
    stroke("green");
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill("green");
  }
}

let trees = [];
let numOfTrees;
let treeDiams;

function setup() {
  treeDiams = random(13, 75);
  numOfTrees = random(7,21);
  createCanvas(400, 400);
  for (let i = 0; i < numOfTrees; i++) {
    let someTree = new Tree(random(width + 7), random(height - 7), treeDiams);
    trees.push(someTree);
  }
}

function draw() {
  background("lawnGreen");
  for (let i = 0; i< trees.length; i++) {
    trees[i].display();
  }
}