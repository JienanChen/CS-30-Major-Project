// new Grid Drawer
// Jienan Chen
// June 4, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridSize = 3;
let grid;
let cellSize;
let autoPlay;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);
  cellSize = height/gridSize * 0.80;
}

function draw() {
  background(200);
  displayGrid();
}

function displayGrid() {
  rectMode(CENTER);
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(width/3 + x*cellSize, y*cellSize + height/4.5, cellSize, cellSize);
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





