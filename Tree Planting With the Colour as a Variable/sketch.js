// Planting Trees Version 3
// Jienan Chen
// May 30, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Tree {
  constructor (x, y, w, hMaker, im){
    this.x = x;
    this.y = y;
    this.width = w;
    this.heightDeterminer = hMaker;
    this.image = im;
}
  display(){     
    noStroke();
    rectMode(CENTER);
    imageMode(CENTER);
    noFill();
    rect(this.x, this.y, this.width, this.width - this.heightDeterminer);  
    image(this.image, this.x, this.y, this.width,this.width - this.heightDeterminer); 
    
  }
}

let trees = [];
let numOfTrees;

let grass;
let treeImg;

function preload(){
  grass = loadImage("grassland.png");
  treeImg = loadImage("tree-png-top-view-furniture-1024.png");
}


function setup() {
  numOfTrees = random(7,21);
  createCanvas(800, 800);
  background(grass);
  for (let i = 0; i < numOfTrees; i++) {   
    let someTree = new Tree(random(width + 7), random(height - 7), random(60, 100), random(1,10), treeImg);
    trees.push(someTree);    
  }
}

function draw() {
  for (let i = 0; i< trees.length; i++) {
    trees[i].display();  
  }
}
