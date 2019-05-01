// First Version of Placeenemies()
// Jienan Chen
// April 5, 2019
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
  let options = [[1,0,0], [0,1,0], [0,0,1]];
  //let options2 = [[2,1,1], [1,2,1], [1,1,2]];
  //let options3 = [[2,1,1], [1,2,1], [1,1,2]];
  let choice = random(options);
  let choice2 = random(options);
  let choice3 = random(options);
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols ; j++) {
      emptyArray[i].push(choice[i]);
      emptyArray[i].push(choice[i]);
      emptyArray[i].push(choice[i]);
      //console.log(emptyArray[1]);
      //console.log(emptyArray[2]);
      //console.log(emptyArray[3]);
      //console.log("this",choice);
    }
  }
  //     choice = random(options);
  //     if (choice === 1){
  //       emptyArray[i].push(1);
  //       choice = 0;
  //     }
  //     else if (choice === 0){
  //       emptyArray[i].push(0);
  //     }
  //      choice = random(options);
  //   }
  // }
  return emptyArray;
  console.log(emptyArray)
}
