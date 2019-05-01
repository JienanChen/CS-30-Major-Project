// Advanced Version of placeEnemies with Permutations
// Jienan Chen
// April 14, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridSize = 20;
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
  let free=[];
  let free1=[];
  let emptyArray = [];
  for (let h = 0; h < gridSize; h++){
    free.push([h]);    
  }
    
  free1=shuffle(free);
  //for (let h = 0; h < gridSize; h++){
  //console.log(free1[h]); 
  //console.log("h=",free[h])
  //}
    
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols ; j++) {    
      if (j==free1[i]){          
        emptyArray[i].push(1);            
      }
      else{
        emptyArray[i].push(0);         
      }      
    }
  }   
  return emptyArray;
}



