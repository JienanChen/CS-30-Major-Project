// Model of First Version of Grid Based Game
// Jienan Chen, Pouya Pourhaj
// April 24, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let buttonText = ["One", "Two"];
let difficulty = ["One", "Two"];
let buttonAndTextPlacement = ["3", "6"];
let buttonX, buttonY, buttonWidth, buttonHeight;

let size;
let state;
let startButtonX, startButtonY, startButtonWidth, startButtonHeight;

let clicked = false;

let gridSize;
let grid;
let cellSize;
let gridsDrawn
//let autoPlay;

let happy;
let angry;

function preload() {
  soundFormats("mp3","m4a");
  happy = loadSound("assets/applause crowd cheering sound effect.mp3");
  angry = loadSound("assets/300 people fake laugh SOUND EFFECT.mp3");
}

function setup() {
  //Screen for the grid
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  } else {
    createCanvas(windowWidth, windowWidth);
  }
  
  state = 1;
  
  rectMode(CENTER);
  textAlign(CENTER);

  //Setting up the grid
  grid = placeEnemies(gridSize, gridSize);
  gridSize = 0;
  cellSize = 0;

  //Assigning start menu button values
  startButtonX = width / 2;
  startButtonY = height / 2;
  startButtonWidth = 250;
  startButtonHeight = 125;

  //Introduction menu button placement/values
  buttonX = width / 2;
  buttonY = height / 8;
  buttonWidth = width / 2;
  buttonHeight = (height / 2 - 10) / 2;
  size = (height / 2 - 10) / 4;
  gridsDrawn=0
}


function draw() {
  if (state === 1) {    
    loadStartScreen();
  }
  if (state === 2) {
    introductionMenu();
  }
  
  if (state === "One") {
    //console.log("draw,state=",state)
    gridSize = 3;
    grid = placeEnemies(gridSize, gridSize);
    displayGrid();
    noLoop();
  }
  if (state === "Two") {
    gridSize = 8;
    grid = placeEnemies(gridSize, gridSize);
    displayGrid();
    noLoop();
  }
}

function loadStartScreen() {
  if (state === 1) {
    background("brown");
    fill("white");
    stroke("grey");
    rect(startButtonX, startButtonY, startButtonWidth, startButtonHeight);
    strokeWeight(3);
    stroke("black");
    text("Start", startButtonX, startButtonY);
    textSize(startButtonWidth / 5, startButtonHeight / 5);
    if (clickedOnStartButton() && clicked) {
      state = 2;
    }
  }
}

function mousePressed() {
  clicked = true;
  cellSize = width/gridSize;
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);
  //console.log("xcoord=",xcoord, "ycoord=",ycoord);
  //console.log("mousePressed,state=",state);
  if (state === 2) {
    for (let i = 0; i < buttonAndTextPlacement.length; i++) {
      if (mouseX > buttonX - buttonWidth / 2 & mouseX < buttonX + buttonWidth / 2 & mouseY > buttonAndTextPlacement[i] * buttonY - buttonHeight / 2 & mouseY < buttonAndTextPlacement[i] * buttonY + buttonHeight / 2){
        
        state = difficulty[i];
    }
  }
  }

  if  (gridsDrawn===1){
    if ((state === "One" || state === "Two") && grid[ycoord][xcoord] === 1 ) {
      angry.stop();
      happy.stop();
      happy.setVolume(0.3);
      happy.play();
      console.log("here");
      grid[ycoord][xcoord] = 2;
      displayGrid();
    } 
  
   else if ((state === "One" || state === "Two") && grid[ycoord][xcoord] === 0) {
      happy.stop();
      angry.stop();
      angry.setVolume(0.5);
      angry.play();
    }
  }
}


function clickedOnStartButton() {
  return mouseX >= startButtonX - startButtonWidth / 2 &&
    mouseX <= startButtonX + startButtonWidth / 2 &&
    mouseY >= startButtonY - startButtonHeight / 2 &&
    mouseY <= startButtonY + startButtonHeight / 2;
}

function introductionMenu() {
  
  //console.log("introductionMenu, state=",state)
  if (state === 2) {
    background("black");
    fill("white");
    stroke("red");
    strokeWeight(3);
    drawButtons();
  }
}

function drawButtons() {
  textSize(size);
  for (let i = 0; i < buttonAndTextPlacement.length; i++) {
    rect(buttonX, buttonAndTextPlacement[i] * buttonY, buttonWidth, buttonHeight);
    text(buttonText[i], buttonX, buttonAndTextPlacement[i] * buttonY);
  }
}


function displayGrid() {
  
  cellSize=width/gridSize
  //console.log("display,state=",state, "grid size=",gridSize,"cellSize=",cellSize,"width=",width);
  rectMode(CORNER);
  stroke(0);
  console.log("display, gridSize=",gridSize);
  for (let y = 0; y < gridSize; y++) {
    console.log(y);
    for (let x = 0; x < gridSize; x++) { 
      console.log("this",grid[y][x])
      if (grid[y][x] === 0 || grid[y][x] === 1) {
        fill(255);
      }
      //if (grid[y][x] === 0){
        //fill(255);
      //}
      else {
        console.log("else");
        fill(0);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function placeEnemies(cols, rows) {
  
  //console.log("placement enemies,gridSize=",gridSize)
  let blackCols = [];
  let free = []
  let emptyArray = [];
  
  for (let h = 0; h < gridSize; h++) {
    free.push([h]);
  }
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    choice = random(free);
    while (blackCols.includes(choice)) {
      choice = random(free);
    }
    for (let j = 0; j < cols; j++) {
      if (j == choice) {
        emptyArray[i].push(1);
      } else {
        emptyArray[i].push(0);
      }
    }
    blackCols.push(choice);
  }
  gridsDrawn=1
  return emptyArray;
}
