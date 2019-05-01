// Project Title
// Your Name
// Date
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
  let blackCols = [];
  let free=[]
  let emptyArray = [];
  for (let h = 0; h < gridSize; h++){
    free.push([h]); 
   //console.log("h=",free[h])
  }
    
   
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    choice = random(free); 
    while (blackCols.includes(choice)){    
    choice=random(free);
      }       
                
    for (let j = 0; j < cols ; j++) {    
          if (j==choice){
        emptyArray[i].push(1)
              }
      else{
        emptyArray[i].push(0);       
    }
      
    }
    blackCols.push(choice);
     }
  
 
return emptyArray
}

