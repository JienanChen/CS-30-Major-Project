// Landscaper
// Jienan Chen
// May 31, 2019
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

let tree;
let colliflowerr;
let pine;
let palm;
let fir;
let sprangy;
let spindly;
let redMaple;
let greenMaple;
let orange;

function preload(){
 grass = loadImage("assets/grassland.png");

 tree =loadImage("assets/tree1A.png");
 colliflower = loadImage("assets/tree2.png");
 pine = loadImage("assets/tree3A.png");
 
 fir = loadImage("assets/tree5A.png");
 sprangy = loadImage("assets/tree6.png");
 spindly = loadImage("assets/tree7.png");
 redMaple = loadImage("assets/tree8.png");
 orange = loadImage("assets/tree10.png");
}


function setup() {
  numOfTrees = random(7,21);
  createCanvas(windowWidth, windowHeight);
  background(grass);
  
  let treeImages = new Map();
  treeImages.set("tree", tree);
  treeImages.set("colliflower", colliflower);
  treeImages.set("pine", pine);

  treeImages.set("fir", fir);
  treeImages.set("sprangy", sprangy);
  treeImages.set("spindly", spindly);
  treeImages.set("redMaple", redMaple);
  treeImages.set("orange", orange);

for (let i = 0; i < numOfTrees; i++) {  
  choices = ["tree","colliflower", "pine", "fir", "sprangy", "spindly", "redMaple",  "orange"];
  choice = random(choices);
  let someTree = new Tree(random(width + 7), random(height - 7), random(60, 100), random(1,10), treeImages.get(choice));
  trees.push(someTree); 
  choice = "";
  }
}

function draw() {
   for (let i = 0; i< trees.length; i++) {
     trees[i].display();  
   }
}
