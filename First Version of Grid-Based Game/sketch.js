// First Version of Grid Based Game
// Jienan Chen, Pouya Pourhaj
// April 25, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let buttonText = ["Spasky", "Charter"];
let difficulty = ["Spasky", "Charter"];
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

let sLoss1, sLoss2, sLoss3, sLoss4, sLoss5;
let sWin1, sWin2, sWin3;

let cLoss1, cLoss2, cLoss3, cLoss4, cLoss5, cLoss6;
let cWin1, cWin2;

function preload() {
  soundFormats("wav","m4a");
  sLoss1 = loadSound("assets/MuhammadLoss1.m4a");
  sLoss2 = loadSound("assets/MuhammadLoss2.m4a");
  sLoss3 = loadSound("assets/MuhammadLoss3.m4a");
  sLoss4 = loadSound("assets/MuhammadLoss4.m4a");
  sLoss5 = loadSound("assets/MuhammadLoss5.m4a");
  
  sWin1 = loadSound("assets/MuhammadVictory1.m4a");
  sWin2 = loadSound("assets/MuhammadVictory2.m4a");
  sWin3 = loadSound("assets/MuhammadVictory3.m4a");
  
  cLoss1 = loadSound("assets/charterLoss1.m4a");
  cLoss2 = loadSound("assets/charterLoss2.m4a");
  cLoss3 = loadSound("assets/charterLoss3.m4a");
  cLoss4 = loadSound("assets/charterLoss4.m4a");
  cLoss5 = loadSound("assets/charterLoss5.m4a");
  cLoss6 = loadSound("assets/charterLoss6.wav");
  
  cWin1 = loadSound("assets/charterWin1.m4a");
  cWin2 = loadSound("assets/charterWin2.m4a");
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
  
  if (state === "Spasky") {
    gridSize = 3;
    grid = placeEnemies(gridSize, gridSize);
    displayGrid();
    noLoop();
  }
  if (state === "Charter") {
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
  if (state === 2) {
    for (let i = 0; i < buttonAndTextPlacement.length; i++) {
      if (mouseX > buttonX - buttonWidth / 2 & mouseX < buttonX + buttonWidth / 2 & mouseY > buttonAndTextPlacement[i] * buttonY - buttonHeight / 2 & mouseY < buttonAndTextPlacement[i] * buttonY + buttonHeight / 2){
        
        state = difficulty[i];
    }
  }
  }

  if  (gridsDrawn===1){
    if (state === "Spasky" && grid[ycoord][xcoord] === 1 ) {
      stopAllSounds();
      playSpaskyWinSound();
      grid[ycoord][xcoord] = 2;
      displayGrid();
    } 
  
   else if (state === "Spasky" && grid[ycoord][xcoord] === 0){
      stopAllSounds();
      playSpaskyLossSound();
    }
    
    else if (state === "Charter" && grid[ycoord][xcoord] === 1 ) {
      stopAllSounds();
      playCharterWinSound();
      grid[ycoord][xcoord] = 2;
      displayGrid();
    }
    else if (state === "Charter" && grid[ycoord][xcoord] === 0){
      stopAllSounds();
      playCharterLossSound();
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
  rectMode(CORNER);
  stroke(0);
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) { 
      if (grid[y][x] === 0 || grid[y][x] === 1) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function placeEnemies(cols, rows) {
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
        emptyArray[i].push(1)
      } else {
        emptyArray[i].push(0);
      }
    }
    blackCols.push(choice);
  }
  gridsDrawn=1
  return emptyArray
}

function playSpaskyLossSound(){
  let choices = [1,2,3,4,5];
  choice = random(choices);
  if (choice === 1){
    sLoss1.setVolume(0.3);
    sLoss1.play();
  }
  else if (choice === 2){
    sLoss2.setVolume(0.3);
    sLoss2.play();
  }
  else if (choice === 3){
    sLoss3.setVolume(0.3);
    sLoss3.play();
  }
   else if (choice === 4){
    sLoss4.setVolume(0.3);
    sLoss4.play();
  }
   else if (choice === 5){
    sLoss5.setVolume(0.3);
    sLoss5.play();
  }
}

function playCharterLossSound(){
  let choices = [1,2,3,4,5,6];
  choice = random(choices);
  if (choice === 1){
    cLoss1.setVolume(0.3);
    cLoss1.play();
  }
  else if (choice === 2){
    cLoss2.setVolume(0.3);
    cLoss2.play();
  }
  else if (choice === 3){
    cLoss3.setVolume(0.3);
    cLoss3.play();
  }
   else if (choice === 4){
    cLoss4.setVolume(0.3);
    cLoss4.play();
  }
   else if (choice === 5){
    cLoss5.setVolume(0.3);
    cLoss5.play();
  }
  else if (choice === 6){
    cLoss6.setVolume(0.3);
    cLoss6.play();
  }
}

function playSpaskyWinSound(){
  let choices = [1,2,3];
  choice = random(choices);
  if (choice === 1){
    sWin1.setVolume(0.5);
    sWin1.play();
  }
  else if (choice === 2){
    sWin2.setVolume(0.5);
    sWin2.play();
  }
  else if (choice === 3){
    sWin3.setVolume(1.0);
    sWin3.play();
  }
}

function playCharterWinSound(){
  let choices = [1,2];
  choice = random(choices);
  if (choice === 1){
    cWin1.setVolume(1.0);
    cWin1.play();
  }
  else if (choice === 2){
    cWin2.setVolume(1.0);
    cWin2.play();
  }
}

function stopAllSounds(){
  sLoss1.stop();
  sLoss2.stop();
  sLoss3.stop();
  sLoss4.stop();
  sLoss5.stop();
  
  sWin1.stop();
  sWin2.stop();
  sWin3.stop();
  
  cLoss1.stop();
  cLoss2.stop();
  cLoss3.stop();
  cLoss4.stop();
  cLoss5.stop();
  cLoss6.stop();
  
  cWin1.stop();
  cWin2.stop();
}
