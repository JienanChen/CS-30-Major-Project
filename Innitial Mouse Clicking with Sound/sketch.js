// Innitial Mouse Clicking
// Jienan Chen
// April 15, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridSize = 8;
let grid;
let cellSize;
let autoPlay;

let happy;
let angry;

function preload(){
  soundFormats("m4a");
  happy = loadSound("assets/happiness.m4a");
  angry = loadSound("assets/Frustrated Noise.m4a");  
}


function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  //createCanvas(300, 300);
  
  grid = placeEnemies(gridSize, gridSize);
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



function placeEnemies(cols, rows) {
  let blackCols = [];
  let free=[];
  let emptyArray = [];
  for (let h = 0; h < gridSize; h++){
    free.push([h]); 
    //console.log("h=",free[h])
  } 
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    // eslint-disable-next-line no-undef
    choice = random(free); 
    while (blackCols.includes(choice)){    
      choice=random(free);
    }                 
    for (let j = 0; j < cols ; j++) {    
      if (j==choice){
        emptyArray[i].push(1);
      }
      else{
        emptyArray[i].push(0);       
      }     
    }
    blackCols.push(choice);
  }
  return emptyArray;
}

// function mousePressed(){
//    //if ((mouseX >= xCor  && mouseX <=  + cellSize) && (mouseY >= yCor && mouseY <= yCor + squareSize)){
//   if (xCor > 
//     happy.setVolume(0.3);
//     happy.play();
//    }
// }

function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[ycoord][xcoord] === 1) {
    //grid[ycoord][xcoord] = 0;
    happy.setVolume(0.3);
    happy.play();
  }
  else {
    //grid[ycoord][xcoord] = 1;
    angry.setVolume(0.5);
    angry.play();
    
    
    
  }
}
