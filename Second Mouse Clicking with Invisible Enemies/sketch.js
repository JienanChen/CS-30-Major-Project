// Mouse Clicking with Sound and Invisible Blavikens
// Jienan Chen
// April 24, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridSize = 3;
let grid;
let cellSize;
let autoPlay;

let happy;
let angry;

function preload(){
  soundFormats("mp3","m4a");
  applause = loadSound("applause crowd cheering sound effect.mp3");
  grainger = loadSound("PercyGrainger_BritishFolkMusicSettingsNo22CountryGardens_894231793622_1_1.mp3");  
}


function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  
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
      
      else if (grid[y][x] === 1){
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
  let free=[]
  let emptyArray = [];
  for (let h = 0; h < gridSize; h++){
    free.push([h]); 
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


function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[ycoord][xcoord] === 1) {
    grainger.stop();
    applause.stop();
    applause.setVolume(0.3);
    applause.play();
    grid[ycoord][xcoord] = 2;
  }
  else {
    applause.stop();
    grainger.stop();
    grainger.setVolume(0.5);
    grainger.play(); 
  }
}