// Project Title
// Your Name
// Date
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
let colliflower;
let pine;
let palm;
let fir;
let sprangy;
let spindly;
let redMaple;
let greenMaple;
let orange;

let birds;

let gridSize = 3;
let grid;
let cellSize;

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
  birds = loadSound("assets/Amazing Natural Bird Sounds.mp3");
}

function setup() {
  numOfTrees = random(7,21);
  createCanvas(windowWidth, windowHeight);
  background(grass);

  grid = createRandom2DArray(gridSize, gridSize);
  cellSize = height/gridSize * 0.80;
  
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
    let choices = ["tree","colliflower", "pine", "fir", "sprangy", "spindly", "redMaple",  "orange"];
    let choice = random(choices);
    let someTree = new Tree(random(width + 7), random(height - 7), random(60, 100), random(1,10), treeImages.get(choice));
    trees.push(someTree); 
    choice = "";
  }
}

function draw() {
  displayGrid();
  for (let i = 0; i< trees.length; i++) {
    trees[i].display();  
  }
}

function displayGrid() {
  rectMode(CENTER);
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      stroke(0);
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(width/2.75 + x*cellSize, y*cellSize + height/4.5, cellSize, cellSize);
    }
  }
}

function create2DArray(cols, rows) {
  let emptyArray = [];
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols; j++) {
      emptyArray[i].push(0);
    }
  }
  return emptyArray;
}

function createRandom2DArray(cols, rows) {
  let emptyArray = [];
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols; j++) {
      if (random(100) < 50) {
        emptyArray[i].push(0);
      }
      else {
        emptyArray[i].push(1);
      }
    }
  }
  return emptyArray;
}