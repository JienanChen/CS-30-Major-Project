// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Tree {
  constructor (x, y, d, c){
    this.x = x;
    this.y = y;
    this.diameter = d; 
    this.fill = c;
  }
  display(){
    noSmooth();
    stroke(this.fill);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(this.fill);
  }
}

let trees = [];
let numOfTrees;


function setup() {
  numOfTrees = random(7,21);
  createCanvas(windowWidth, windowHeight);
  let treeColours = ["green", "limeGreen", "darkGreen", "forestGreen", "thistle", "plum"];
  let colChoice = "";
  for (let i = 0; i < numOfTrees; i++) {
    let colChoice = random(treeColours);
    let someTree = new Tree(random(width), random(height), random(height * 0.15, height * 0.3), colChoice);
    trees.push(someTree);
    colChoice = "";
  }
}

function draw() {
  background("lawnGreen");
  for (let i = 0; i< trees.length; i++) {
    trees[i].display();
  }
}