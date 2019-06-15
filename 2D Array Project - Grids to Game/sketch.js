// La redemption Game (Innitial Version)
// Jienan Chen, Pouya Pourhaj
// April 28, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Distractions {
  constructor(x, y, someWidth,someColour, someImage, someSpeed){
    this.x = x;
    this.y = y;
    this.width = someWidth;
    this.stroke = someColour;
    this.img = someImage;
    this.speed = someSpeed;
  }

  display() {
    rectMode(CENTER);
    imageMode(CENTER);
    strokeWeight(7);
    stroke(this.stroke);
    rect(this.x, this.y, this.width, this.width - 7);
    image(this.img, this.x, this.y, this.width, this.width - 7);
  }

  move() {
    let choice = random(100);
    if (this.x + this.width >= width || this.x <= 0){
      this.x = random(0, width - this.width);
    }
    if (this.y + this.width - 7 >= height || this.y <= 0){
      this.y = random(0,  height - this.width - 7);
    }
    if (choice < 25) {
      //up
      this.y -= this.speed* random(8);
    }
    else if (choice < 50) {
      //down
      this.y += this.speed* random(10);
    }
    else if (choice < 75) {
      //left
      this.x -= this.speed * random(8);
    }
    else {
      //right
      this.x += this.speed * random(10);
    }
  }
}

let state;

//Button related global variables(by Pouya)
let buttonText = ["Spasky", "Charter"];
let difficulty = ["Spasky", "Charter"];
let buttonAndTextPlacement = [3, 6];
let buttonX, buttonY, buttonWidth, buttonHeight;
let size;
let startButtonX, startButtonY, startButtonWidth, startButtonHeight;
let clicked = false;

//Instructions related global variables (by Jienan)
let instructionText = ["1. Select one of the two modes.", "2. Find the enemies by clicking on the grid.","3. If you desire to change modes, click r."];
let instructionPlacement = [130, 160, 190];


//Grid related global variables (adapted by Jienan)
let gridSize;
let grid;
let cellSize;
let gridsDrawn

//Sounds related global variables(by Jienan)
//Spasky sounds
let sLoss1, sLoss2, sLoss3, sLoss4, sLoss5;
let sWin1, sWin2, sWin3;

//Charter sounds
let cLoss1, cLoss2, cLoss3, cLoss4, cLoss5, cLoss6;
let cWin1, cWin2;

//Image for Choosing Interactive Scenes
let choooseStateBackground;

//Tag Blaviken Images and Variables
//Images
let blaviken;
let winImage;
let lossImage;
let finger;
//Blaviken Rectangle Variables
let rectX, rectY;
let rectWidth, rectHeight;
let imageRectWidth , imageRectHeight;
//Sounds
let win1, win2, win3, win4, win5, win6, win7, win8;
let loss1, loss2, loss3, loss4, loss5, loss6, loss7, loss8, loss9;
let victory;
//Counters
let userLossCounter;
let userWinCounter;
let livesLeft;
let hits;
//Webcam variable
let user;

//Array for the Disctractions
let distractions = [];

function preload(){
  //Preload sounds(Text within the function by Jienan. The function already exists.)

  //ensures audio compatibility
  soundFormats("wav","m4a");

  //Sounds to be played in the Spasky mode when Blaviken is not found
  sLoss1 = loadSound("assets/MuhammadLoss1.m4a");
  sLoss2 = loadSound("assets/MuhammadLoss2.m4a");
  sLoss3 = loadSound("assets/MuhammadLoss3.m4a");
  sLoss4 = loadSound("assets/MuhammadLoss4.m4a");
  sLoss5 = loadSound("assets/MuhammadLoss5.m4a");
  
  //Otherwise, in Spasky mode
  sWin1 = loadSound("assets/MuhammadVictory1.m4a");
  sWin2 = loadSound("assets/MuhammadVictory2.m4a");
  sWin3 = loadSound("assets/MuhammadVictory3.m4a");
  
  //Sounds to be played in the Charter mode when Blaviken is not found
  cLoss1 = loadSound("assets/charterLoss1.m4a");
  cLoss2 = loadSound("assets/charterLoss2.m4a");
  cLoss3 = loadSound("assets/charterLoss3.m4a");
  cLoss4 = loadSound("assets/charterLoss4.m4a");
  cLoss5 = loadSound("assets/charterLoss5.m4a");
  cLoss6 = loadSound("assets/charterLoss6.wav");
  
  //Otherwise, in Charter mode
  cWin1 = loadSound("assets/charterWin1.m4a");
  cWin2 = loadSound("assets/charterWin2.m4a");

  //Tag Blaviken Sounds

  //Sounds to be played when Blaviken's ! clicked
  win1 = loadSound("assets/BlavikenWin1.m4a");
  win2 = loadSound("assets/BlavikenWin2.m4a");
  win3 = loadSound("assets/BlavikenWin3.m4a");
  win4 = loadSound("assets/BlavikenWin4.m4a");
  win5 = loadSound("assets/BlavikenWin5.m4a");
  win6 = loadSound("assets/BlavikenWin6.m4a");
  win7 = loadSound("assets/BlavikenWin7.m4a");
  win8 = loadSound("assets/BlavikenWin8.m4a");

  //Sounds to be played when Blaviken's clicked
  loss1 = loadSound("assets/BlavikenLoss1.m4a");
  loss2 = loadSound("assets/BlavikenLoss2.m4a");
  loss3 = loadSound("assets/BlavikenLoss3.m4a");
  loss4 = loadSound("assets/BlavikenLoss4.m4a");
  loss5 = loadSound("assets/BlavikenLoss5.m4a");
  loss6 = loadSound("assets/BlavikenLoss6.m4a");
  loss7 = loadSound("assets/BlavikenLoss7.m4a");
  loss8 = loadSound("assets/BlavikenLoss8.m4a");
  loss9 = loadSound("assets/BlavikenLoss9.m4a");

  //Images
  //Background for when choosing between interactive scenes with Blaviken
  chooseStateBackground = loadImage("assets/pattern2.png");
}

function setup() {
  //Screen for the grid(by Pouya)
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  } else {
    createCanvas(windowWidth, windowWidth);
  }
  
  //Setting the mode(by Pouya)
  state = 1;
  
  //Setting text location on the buttons(by Pouya)
  rectMode(CENTER);
  textAlign(CENTER);

  //Setting up the grid(by Jienan)
  grid = placeEnemies(gridSize, gridSize);
  gridSize = 0;
  cellSize = 0;

  //Assigning start menu button values(by Pouya)
  startButtonX = width / 2;
  startButtonY = height / 2;
  startButtonWidth = 250;
  startButtonHeight = 125;

  //Introduction menu button placement/values(by Pouya)
  buttonX = width / 2;
  buttonY = height / 8;
  buttonWidth = width / 2;
  buttonHeight = (height / 2 - 10) / 2;
  size = (height / 2 - 10) / 4;
  gridsDrawn = 0;

  //Tag Blaviken
  rectWidth = width / 9.78;
  rectHeight = width / 9;
  rectX = random(0, width - rectWidth);
  rectY = random(0, height - rectHeight);
  imageRectWidth = width / 2;
  imageRectHeight = width / 3.2;
  userLossCounter = 0;
  userWinCounter = 0;
  livesLeft = 3;
  hits = 0;
  user = createCapture(VIDEO);
  user.size(width/4, height/4);
  user.hide();

  let choices = ["beige", "black", "orange", "purple", "yellow"];
  for (let i=0; i< 36; i++) {
    let colour = random(choices);
    let vex = new Distractions(random(width), random(height), random(75, 250), random(choices), blaviken, 5);
    distractions.push(vex);
  }
}

function draw() {
  //Displays the appropriate images on the screen depending on the mode(by Pouya, fixed by Jienan)
  if (state === 1){    
    loadStartScreen();
    writeInstructions();
  }
  if (state === 2){
    introductionMenu();
  }
  if (state === "Spasky"){
    gridSize = 3;
    if (gridsDrawn===0){
      grid = placeEnemies(gridSize, gridSize);
      displayGrid();
      gridsDrawn = 1;
      }
  }
  if (state === "Charter"){
    gridSize = 8;
    if (gridsDrawn===0){
      grid = placeEnemies(gridSize, gridSize);
      displayGrid();
      gridsDrawn = 1;
    }
  }

  if (state === "Choose"){
    background(chooseStateBackground);
    drawChoiceButtons();
  }

  if (state === "Tag"){
    background(random(125, 250));
    displayBlaviken();

    //Draw distractions
    for (let i=0; i<distractions.length; i++) {
      distractions[i].move();
      distractions[i].display();
    }
    
    //Cursor
    noCursor();
    imageMode(CENTER);
    image(finger, mouseX, mouseY + 5, width/27, height/8);
    
    //Draws the rest of the "distractions" in the background
    moveRect();
    drawLines();
    progressiveLines();
    drawPoints();
    displayLivesLeft();
    displayHits();

    //Display user's face through the webcam on the screen. 
    //If the webcam is nor turned on, the image will not appear.
    imageMode(CORNER);
    image(user, 0, height - (height/4+40));

    gameOver();
  }

  
}

function loadStartScreen(){
  //display a large button on which is printed "start" (adapted by Pouya from Jienan's Le Chartier Project, fixed by Jienan)
  textAlign(CENTER);
  textSize((floor(height / 2) - 10) / 5);
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

function writeInstructions(){
  //Writes out instructions (temporary ones) beneath the start button (by Jienan)
  textAlign(LEFT);
  textSize (height * 0.045);
  fill(255);
for (i = 0; i< instructionText.length; i++){
  text(instructionText[i], 23, height/2 + instructionPlacement[i]);
  } 
}

function clickedOnStartButton(){
  //Detects whether or not the mouse is within the boundaries of the 'start" button (by Pouya)
  return mouseX >= startButtonX - startButtonWidth / 2 &&
    mouseX <= startButtonX + startButtonWidth / 2 &&
    mouseY >= startButtonY - startButtonHeight / 2 &&
    mouseY <= startButtonY + startButtonHeight / 2;
}

function introductionMenu(){
  //Sets up the background and other settings for the menu page with two modes(by Pouya, edited by Jienan)
    textAlign(CENTER);
    background("black");
    fill("white");
    stroke("red");
    strokeWeight(3);
    drawButtons();
}

function drawButtons(){
  //Draws two buttons, on which are the names of the modes(adapted by Pouya from Jienan's Le Chartier Project)
  textSize(size);
  for (let i = 0; i < buttonAndTextPlacement.length; i++) {
    rect(buttonX, buttonAndTextPlacement[i] * buttonY, buttonWidth, buttonHeight);
    text(buttonText[i], buttonX, buttonAndTextPlacement[i] * buttonY);
  }
}

function drawChoiceButtons(){
  let yMultipliers = [3/8, 5/8];
  let choiceTexts = ["Tag Blaviken", "Find Blaviken"];
  rectMode(CENTER);
  textAlign(CENTER);
  
  for (let i = 0; i< choiceTexts.length; i++){
    fill(200);
    rect(width/2, height * yMultipliers[i], width/3, height/6.5);
    fill("gold");
    textSize(width/20);
    text(choiceTexts[i],width/2, height * yMultipliers[i] + width/80); 
  }     
}

function displayGrid(){
  //Displays the grids(adapted by Jienan from Mr. Schellenberg's Game of Life Demo) 
  cellSize=width/gridSize;
  rectMode(CORNER);
  stroke(0);
  for (let y = 0; y < gridSize; y++){
    for (let x = 0; x < gridSize; x++) { 
      if (grid[y][x] === 0 || grid[y][x] === 1){
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function placeEnemies(cols, rows){
  //Responsible for furnishing displayGrid() with info, and also where to place the Blavikens(adapted by Jienan from Mr. Schellenberg's Game of Life Demo) 
  let blackCols = [];
  let free = [];
  let emptyArray = [];
  
  for (let h = 0; h < gridSize; h++){
    //Controls the number of Blavikens placed randomly
    free.push([h]);
  }
  for (let i = 0; i < rows; i++){
    emptyArray.push([]);
    choice = random(free);
    while (blackCols.includes(choice)){
      choice = random(free);
    }
    for (let j = 0; j < cols; j++){
      if (j == choice){
        emptyArray[i].push(1);
      } else {
        emptyArray[i].push(0);
      }
    }
    //Works with free to moderate number of Blavikens
    blackCols.push(choice);
  }
  //returns the necessary info for the grids to be drawn properly
  return emptyArray;
}

function playSpaskyLossSound(){
  //When no Blaviken is found in the Spasky mode(by Jienan)
  let choices = [1, 2, 3, 4, 5];
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
  //When no Blaviken is found in the Charter mode(by Jienan)
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
  //When Blaviken is found in the Spasky mode(by Jienan)
  let choices = [1, 2, 3];
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
  //When Blaviken is found in the Charter mode(by Jienan)
  let choices = [1, 2];
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
  //Stops the sounds(by Jienan)

  //Spasky loss sounds
  sLoss1.stop();
  sLoss2.stop();
  sLoss3.stop();
  sLoss4.stop();
  sLoss5.stop();
  //Spasky win sounds
  sWin1.stop();
  sWin2.stop();
  sWin3.stop();
  //Charter loss sounds
  cLoss1.stop();
  cLoss2.stop();
  cLoss3.stop();
  cLoss4.stop();
  cLoss5.stop();
  cLoss6.stop();
  //Charter win sounds
  cWin1.stop();
  cWin2.stop();
}

function mousePressed() {
  //Changing states during the mode selection page(adapted by Pouya from Jienan's Le Chartier Project)
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

  if (state === "Choose"){
    if (mouseX > width/4 && mouseX < width/4 * 3 && mouseY > height*3/8 - (height/6.5)/2 && mouseY < height*3/8 + (height/6.5)/2){
      state = "Tag";
    }
    if (mouseX > width/4 && mouseX < width/4 * 3 && mouseY > height*5/8 - (height/6.5)/2 && mouseY < height*5/8 + (height/6.5)/2){
      state = "Find"
    }
  }

  //Playing and stopping the playing of sounds according to the modes (Spasky and Charter) and displaying Blaviken when he is found (adapted by Jienan from Mr. Schellenberg's Game of Life Demo)
  if  (gridsDrawn===1){
    if (state === "Spasky" && grid[ycoord][xcoord] === 1 ) {
      stopAllSounds();
      playSpaskyWinSound();
      grid[ycoord][xcoord] = 2;
      displayGrid();
      state = "Choose";
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

function keyPressed() {
  if ((state === "Spasky" || state === "Charter") && (key === "r" || key === "R" )){
    gridsDrawn = 0;
    state = 2;
    rectMode(CENTER);
    textAlign(CENTER);
    stopAllSounds();      
  }
}