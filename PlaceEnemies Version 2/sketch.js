// Second Version of PlaceEnemies()
// Jienan Chen
// April 10, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridSize = 3;
let grid;
let cellSize;
let autoPlay;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  
  grid = createRandom2DArray(gridSize, gridSize);
  cellSize = width/gridSize;
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {      
      
      if (grid[y][x] === 0) {
        fill(255);
      }
      else{
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}



function createRandom2DArray(cols, rows) {
  let emptyArray = [];
  let options = [[1,0,0],[0,1,0], [0,0,1]];
  let choice = random(options);
  let choice2 = random(options);
  let choice3 = random(options);
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols ; j++) {
      emptyArray[i].push(choice[i]);
      emptyArray[i].push(choice2[i]);
      emptyArray[i].push(choice3[i]);
    }
  }
  return emptyArray;
}


