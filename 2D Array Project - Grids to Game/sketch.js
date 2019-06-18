// La redemption Game (Innitial Version)
// Jienan Chen, Pouya Pourhaj
// April 28, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Tag Blaviken Class

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

//Blaviken's Lair Class

class WeakestBoobytraps {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 5, 5);
  }
}

class SecondWeakestBoobytraps {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 5, 5);
  }
}

class MediocreBoobytraps {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    ellipseMode(CENTER);
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 5, 5);
  }
}

class SecondMostPowerfulBoobytraps {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    ellipseMode(CENTER);
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 5, 5);
  }
}

class MostPowerfulBoobytraps {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    ellipseMode(CENTER);
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 5, 5);
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
let finger;

//Blaviken Rectangle Variables
let rectX, rectY;
let rectWidth, rectHeight;
let imageRectWidth , imageRectHeight;
//Sounds
let win1, win2, win3, win4, win5, win6, win7, win8;
let loss1, loss2, loss3, loss4, loss5, loss6, loss7, loss8, loss9;
let testSound, testSoundA;
//Counters
let userLossCounter;
let userWinCounter;
let livesLeft;
let hits;
//Webcam variable
let user;

//Array for the Disctractions
let distractions = [];

//Blaviken's Lair
//Arrays for the Classes
let weakestTraps = [];
let nextWeakestTraps = [];
let mediocreTraps = [];
let secondMostPowerfulTraps = [];
let best = [];

//Arrays to store the x and y coordinates of the ellipses drawn by the classes of Blaviken's Lair
//Class 1
let weakestTrapX = [];
let weakestTrapY = [];

//Class 2
let nextWeakestTrapX = [];
let nextWeakestTrapY = [];

//Class 3
let mediocreTrapX = [];
let mediocreTrapY = [];

//Class 4
let secondBestX = [];
let secondBestY = [];

//Class 5
let bestTrapX = [];
let bestTrapY = [];

//Variables for the user controlled "ball"
let ellipseX;
let ellipseY;
let ballWidthHeight;
let ballRadius;

//Variables for the "target," into which the user must direct himself/herself
let targetX, targetY, targetWidth, targetHeight;

//Counts the total amount of lives of the players. The player begins with 30, and loses some when in contact with a boobytrap placed by the 5 classes.
let totalLives;


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

  testSound = loadSound("assets/东周列国.wav");
  testSoundA = loadSound("assets/为你歌唱－ｆ调.wav");

  //Images
  //Background for when choosing between interactive scenes with Blaviken
  chooseStateBackground = loadImage("assets/pattern2.png");

  //Tag Blaviken Images (Blaviken image used in Blaviken's Lair Game Too)
  blaviken = loadImage("assets/20180411_154733 (1) (1)A.jpg");
  finger = loadImage("assets/finger.png");
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
  //Dimensions of the box within which the Blaviken image sits in
  rectWidth = width / 9.78;
  rectHeight = width / 9;
  //Location of said box 
  rectX = random(0, width - rectWidth);
  rectY = random(0, height - rectHeight);

  // imageRectWidth = width / 2;
  // imageRectHeight = width / 3.2;

  //Counts the number of times the user has hit or missed Blaviken
  userLossCounter = 0;
  userWinCounter = 0;
  livesLeft = 4;
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

  cursor(ARROW);
  console.log("setup:weakestTraps.length=",weakestTraps.length,"nextWeakestTraps.length=",nextWeakestTraps.length,"mediocreTraps.length=",mediocreTraps.length,"secondMostPowerfulTraps.length=",secondMostPowerfulTraps.length);
  //Blaviken's Lair
  for (let i = 0; i < 7; i++) {
    x1 = random(width + 7);
    y1 = random(height - 7);
    let someWeakTrap = new WeakestBoobytraps(x1, y1);
    weakestTraps.push(someWeakTrap);
    weakestTrapX.push(x1);
    weakestTrapY.push(y1);
    x1 = 0;
    y1 = 0;
  }
  for (let i = 0; i < 5; i++) {
    x2 = random(width + 7);
    y2 = random(height - 7);
    let someOtherWeakTrap = new SecondWeakestBoobytraps(x2, y2);
    nextWeakestTraps.push(someOtherWeakTrap);
    nextWeakestTrapX.push(x2);
    nextWeakestTrapY.push(y2);
    x2 = 0;
    y2 = 0;
  }
  for (let i = 0; i < 4; i++) {
    x3 = random(width + 7);
    y3 = random(height - 7);
    let someMediocreTrap = new MediocreBoobytraps(x3, y3);
    mediocreTraps.push(someMediocreTrap);
    mediocreTrapX.push(x3);
    mediocreTrapY.push(y3);
    x3 = 0;
    y3 = 0;
  }
  for (let i = 0; i < 2; i++) {
    x4 = random(width + 13);
    y4 = random(height - 6)
    let someAlmostTrap = new SecondMostPowerfulBoobytraps(x4, y4);
    secondMostPowerfulTraps.push(someAlmostTrap);
    secondBestX.push(x4);
    secondBestY.push(y4);
    x4 = 0;
    y4 = 0;
  }
  for (let i = 0; i < 2; i++) {
    x5 = random(width + 13);
    y5 = random(height - 6);
    let someGoodTrap = new MostPowerfulBoobytraps(x5, y5);
    best.push(someGoodTrap);
    bestTrapX.push(x5);
    bestTrapY.push(y5);
    x5 = 0;
    y5 = 0;
  }

  ellipseX = 100;
  ellipseY = 100;
  ballWidthHeight = 40;
  ballRadius = 20;

  targetX = random(255, width - 100);
  targetY = random(400, height - 100);
  targetWidth = 100;
  targetHeight = 100;

  totalLives = 30;
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
    console.log("Spasky:",ellipseX - 20 , targetX , ellipseX + 20 ,targetWidth + targetX , ellipseY - 20 , targetY , ellipseY + 20 , targetY + targetHeight);
    cursor(ARROW);
    gridSize = 3;
    if (gridsDrawn===0){
      grid = placeEnemies(gridSize, gridSize);
      displayGrid();
      gridsDrawn = 1;
      }
  }

  if (state === "Charter"){
    cursor(ARROW);
    gridSize = 8;
    if (gridsDrawn===0){
      grid = placeEnemies(gridSize, gridSize);
      displayGrid();
      gridsDrawn = 1;
    }
  }

  if (state === "spaskyChoose"){
    background(chooseStateBackground);
    drawChoiceButtons();
  }

  if (state === "charterChoose"){
    background(chooseStateBackground);
    drawChoiceButtons();
  }

  if (state === "spaskyTag"){
    background(random(125, 250));
    displayBlaviken();

    //Draw distractions
    //  for (let i=0; i<distractions.length; i++) {
    //    distractions[i].move();
    //    distractions[i].display();
    //   }
    
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

    spaskyGameOver();
  }

  if (state === "charterTag"){
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
    
    //console.log("mouse:",mouseX,mouseY)
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

    charterGameOver();
  }

  if (state === "spaskyLooseScreen"){
    cursor(CROSS);
    background(0);
    textAlign(CENTER);
    fill(255);
    textSize(height/28);
    text("You Lost !\n\n Press r to go back to grids.", width/2, height/2);
  }

  if (state === "spaskyWinScreen"){
    cursor(ARROW);
    background(0);
    textAlign(CENTER);
    fill(255);
    textSize(height/28);
    text("You Won !\n\n Press r to go back to grids.", width/2, height/2);
  }

  if (state === "charterLooseScreen"){
    cursor(ARROW);
    background(0);
    textAlign(CENTER);
    fill(255);
    textSize(height/28);
    text("You Lost !\n\n Press r to go back to grids.", width/2, height/2);
  }

  if (state === "charterWinScreen"){
    cursor(ARROW);
    background(0);
    textAlign(CENTER);
    fill(255);
    textSize(height/28);
    text("You Won !\n\n Press r to go back to grids.", width/2, height/2);
  }

  //Blaviken's Lair
  if (state === "spaskyNavigator"){
    background(0);
    target();
    //console.log("weakestTraps.length=",weakestTraps.length,"nextWeakestTraps.length=",nextWeakestTraps.length,"mediocreTraps.length=",mediocreTraps.length,"secondMostPowerfulTraps.length=",secondMostPowerfulTraps.length);
    for (let i = 0; i < weakestTraps.length; i++) {

      weakestTraps[i].display();
    }

    console.log("setup: weakestTraps=",weakestTraps.length)
     for (let i = 0; i < nextWeakestTraps.length; i++) {
       nextWeakestTraps[i].display();
     }
     for (let i = 0; i < mediocreTraps.length; i++) {
       mediocreTraps[i].display();
     }
     for (let i = 0; i < secondMostPowerfulTraps.length; i++) {
       secondMostPowerfulTraps[i].display();
     }
     for (let i = 0; i < best.length; i++) {
       best[i].display();
     }
    movingBall();
    if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) {
      detectCollision();
    }

    showLivesLeft();

    playersFateSpasky();
  }

  if (state === "charterNavigator"){
    background(0);
    target();
    for (let i = 0; i < weakestTraps.length; i++) {
      weakestTraps[i].display();
    }
    for (let i = 0; i < nextWeakestTraps.length; i++) {
      nextWeakestTraps[i].display();
    }
    for (let i = 0; i < mediocreTraps.length; i++) {
      mediocreTraps[i].display();
    }
    for (let i = 0; i < secondMostPowerfulTraps.length; i++) {
      secondMostPowerfulTraps[i].display();
    }
    for (let i = 0; i < best.length; i++) {
      best[i].display();
    }
    movingBall();
    if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) {
      detectCollision();
    }

    showLivesLeft();

    playersFateCharter();
  }

  if (state === "spaskyLost") {
    background(0);
    textAlign(CENTER);
    fill("red");
    text("You Lost! \n\n  Press r to try again.", width / 2, 3 * height / 8);
  }
  
  if (state === "spaskyWon") {
    background(255);
    textAlign(CENTER);
    fill("green");
    text("You Won! \n\n  Press r to try again.", width / 2, 3 * height / 8);
  }

  if (state === "charterLost") {
    background(0);
    textAlign(CENTER);
    fill("red");
    text("You Lost! \n\n  Press r to try again.", width / 2, 3 * height / 8);
  }

  if (state === "charterWon") {
    background(255);
    textAlign(CENTER);
    fill("green");
    text("You Won! \n\n  Press r to try again.", width / 2, 3 * height / 8);
  }
}

function loadStartScreen(){
  //display a large button on which is printed "start" (adapted by Pouya from Jienan's Le Chartier Project, fixed by Jienan)
  textAlign(CENTER);
  rectMode(CENTER);
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
  let choiceTexts = ["Tag Blaviken", "Blaviken's Lair"];
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
  strokeWeight(3);
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

function displayBlaviken() {
  stroke("red");
  strokeWeight(7);
  smooth();
  rectMode(CORNER);
  imageMode(CORNER);
  rect(rectX, rectY, rectWidth, rectHeight);
  image(blaviken, rectX, rectY);
  blaviken.resize(rectWidth, rectHeight);
}


function drawLines() {
  strokeWeight(random(1, 10));
  stroke(random(48, 250));
  fill(0);
  line(0, random(height), height, random(height));
  line(random(width), 0, height, random(width));
  fill(random(125, 255));
  curve(random(width), random(width), random(width), random(width), random(height), random(height), random(height), random(height));
}

function progressiveLines() {
  for (let i = 0; i < width; i += 20) {
    stroke(random(100, 220));
    strokeWeight(3);
    fill(random(25, 255));
    line(i, 0, i, height);
  }
}

function drawPoints() {
  stroke(random(0, 255));
  strokeWeight(random(1, 35));
  fill(0);
  point(random(width), random(height));
}

function displayLivesLeft(){
  let livesWidth = width/5.79;
  let livesHeight = width/4.4;
  noStroke();
  fill(255, 255, 255, 100);
  rectMode(CORNER);
  rect(width - livesWidth, 0, livesWidth, livesHeight);
  textAlign(CENTER);
  fill(0);
  textSize(width/26);
  text("Lives Left", width-livesWidth + livesWidth/2, livesHeight/1.25);
  textSize(width/13);
  text(livesLeft, width-livesWidth + livesWidth/2, livesHeight/1.75);
}

function displayHits(){
  let hitsWidth = width/5.79;
  let hitsHeight = width/4.4;
  noStroke();
  fill(255, 255, 255, 100);
  rectMode(CORNER);
  rect(0, 0, hitsWidth, hitsHeight);
  textAlign(CENTER);
  fill(0);
  textSize(width/26);
  text("Hits", hitsWidth/2, hitsHeight/1.25);
  textSize(width/13);
  fill("red");
  text(hits, hitsWidth/2, hitsHeight/1.75);
}

function moveRect() {
  rectX += (-9, 7);
  rectY += random(-70, 70);
  //rectX += 2;
  if (rectX + rectWidth >= width || rectX <= 0) {
    rectX = random(0, width - rectWidth);
  }
  if (rectY + rectHeight >= height || rectY <= 0) {
    rectY = random(0, height - rectHeight);
  }
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

function playBlavikenWinSound() {
    testSoundA.play();
  // let choice = floor(random(1, 9));
  // if (choice === 1) {
  //   win1.play();
  //   win1.setVolume(0.5);
  // }
  // if (choice === 2) {
  //   win2.play();
  //   win2.setVolume(0.5);
  // }
  // if (choice === 3) {
  //   win3.play();
  //   win3.setVolume(0.5);
  // }
  // if (choice === 4) {
  //   win4.play();
  //   win4.setVolume(0.5);
  // }
  // if (choice === 5) {
  //   win5.play();
  //   win5.setVolume(0.5);
  // }
  // if (choice === 6) {
  //   win6.play();
  //   win6.setVolume(0.5);
  // }
  // if (choice === 7) {
  //   win7.play();
  //   win7.setVolume(0.5);
  // }
  // if (choice === 8) {
  //   win8.play();
  //   win8.setVolume(0.5);
  // }
}

function playBlavikenLossSound() {
  testSound.play();
  // let choice = floor(random(1, 10));
  // if (choice === 1) {
  //   loss1.play();
  //   loss1.setVolume(0.9);
  // }
  // if (choice === 2) {
  //   loss2.play();
  //   loss2.setVolume(0.9);
  // }
  // if (choice === 3) {
  //   loss3.play();
  //   loss3.setVolume(0.9);
  // }
  // if (choice === 4) {
  //   loss4.play();
  //   loss4.setVolume(0.9);
  // }
  // if (choice === 5) {
  //   loss5.play();
  //   loss5.setVolume(0.9);
  // }
  // if (choice === 6) {
  //   loss6.play();
  //   loss6.setVolume(0.9);
  // }
  // if (choice === 7) {
  //   loss7.play();
  //   loss7.setVolume(0.9);
  // }
  // if (choice === 8) {
  //   loss8.play();
  //   loss8.setVolume(0.9);
  // }
  // if (choice === 9) {
  //   loss9.play();
  //   loss9.setVolume(0.9);
  // }
}

function stopAllSounds(){
  //Stops the sounds in Grids Mode(by Jienan)

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

function stopAllBlavikenSounds() {
  testSound.stop();
  testSoundA.stop();
  //Stops sounds in the Tag Blaviken mode
  // win1.stop();
  // win2.stop();
  // win3.stop();
  // win4.stop();
  // win5.stop();
  // win6.stop();
  // win7.stop();
  // win8.stop();

  // loss1.stop();
  // loss2.stop();
  // loss3.stop();
  // loss4.stop();
  // loss5.stop();
  // loss6.stop();
  // loss7.stop();
  // loss8.stop();
  // loss9.stop();
}

function spaskyGameOver() {
  if (userLossCounter > 3) {
    stopAllBlavikenSounds();
    clear();
    state = "spaskyLooseScreen";
  }
  if (userWinCounter > 2) {
    stopAllBlavikenSounds();
    clear();
    state = "spaskyWinScreen";
  }
}

function charterGameOver() {
console.log("gameover:","userLossCounter=",userLossCounter,"userWinCounter > 2=",userWinCounter > 2)

  if (userLossCounter > 3) {
    stopAllBlavikenSounds();
    clear();
    state = "charterLooseScreen";
  }
  if (userWinCounter > 2) {
    stopAllBlavikenSounds();
    clear();
    state = "charterWinScreen";
  }
}

function movingBall() {
  fill("red");
  noStroke();
  ellipseMode(CENTER);
  ellipse(ellipseX, ellipseY, ballWidthHeight);

  if (keyIsDown(LEFT_ARROW) && ellipseX >= 0) {
    ellipseX -= 8;
  }

  if (keyIsDown(RIGHT_ARROW) && ellipseX <= windowWidth) {
    ellipseX += 8;
  }

  if (keyIsDown(UP_ARROW) && ellipseY >= 0) {
    ellipseY -= 8;
  }

  if (keyIsDown(DOWN_ARROW) && ellipseY <= windowHeight) {
    ellipseY += 8;
  }
}

function detectCollision() {
  let interval = ballRadius - 5;

  for (let i = 0; i < weakestTrapX.length; i++) {
    let distance1 = ((ellipseX - weakestTrapX[i]) ** 2 + (ellipseY - weakestTrapY[i]) ** 2) ** 0.5;
    if (distance1 <= interval) {
      totalLives -= 2;
      ellipseX = 200;
      ellipseY = 200;
      targetX = random(width / 3.13, width - 100);
      targetY = random(height / 2, height - 100);
    }
  }

  for (let i = 0; i < nextWeakestTrapX.length; i++) {
    let distance2 = ((ellipseX - nextWeakestTrapX[i]) ** 2 + (ellipseY - nextWeakestTrapY[i]) ** 2) ** 0.5;
    if (distance2 <= interval) {
      totalLives -= 5;
      ellipseX = 200;
      ellipseY = 200;
      targetX = random(width / 3.13, width - 100);
      targetY = random(height / 2, height - 100);
    }
  }

  for (let i = 0; i < mediocreTrapX.length; i++) {
    let distance3 = ((ellipseX - mediocreTrapX[i]) ** 2 + (ellipseY - mediocreTrapY[i]) ** 2) ** 0.5;
    if (distance3 <= interval) {
      totalLives -= 7;
      ellipseX = 200;
      ellipseY = 200;
      targetX = random(width / 3.13, width - 100);
      targetY = random(height / 2, height - 100);
    }
  }

  for (let i = 0; i < secondBestX.length; i++) {
    let distance4 = ((ellipseX - secondBestX[i]) ** 2 + (ellipseY - secondBestY[i]) ** 2) ** 0.5;
    if (distance4 <= interval) {
      totalLives -= 10;
      ellipseX = 200;
      ellipseY = 200;
      targetX = random(width / 3.13, width - 100);
      targetY = random(height / 2, height - 100);
    }
  }

  for (let i = 0; i < bestTrapX.length; i++) {
    let distance5 = ((ellipseX - bestTrapX[i]) ** 2 + (ellipseY - bestTrapY[i]) ** 2) ** 0.5;
    if (distance5 <= interval) {
      totalLives -= 15;
      ellipseX = 200;
      ellipseY = 200;
      targetX = random(width / 3.13, width - 100);
      targetY = random(height / 2, height - 100);
    }
  }
}

function showLivesLeft() {

  textAlign(CENTER);
  textSize(40);
  fill(255);
  text("Lives Left", width - 200 / 2, 80);
  text(totalLives, width - 200 / 2, 150);
}

function target() {
  rectMode(CORNER);
  //fill("blue");
  fill(0);
  rect(targetX, targetY, width/8, height/6.4);
  imageMode(CORNER);
  image(blaviken, targetX, targetY, width/8, height/6.4);
}

function playersFateSpasky() {
  if (totalLives < 1) {
    state = "spaskyLost";
  }

  if (ellipseX - 20 > targetX && ellipseX + 20 < targetWidth + targetX && ellipseY - 20 > targetY && ellipseY + 20 < targetY + targetHeight) {
    //console.log("got it");
    state = "spaskyWon";
  }
}

function playersFateCharter() {
  if (totalLives < 1) {
    state = "charterLost"
  }

  if (ellipseX - 20 > targetX && ellipseX + 20 < targetWidth + targetX && ellipseY - 20 > targetY && ellipseY + 20 < targetY + targetHeight) {
    //console.log("got it");
    state = "charterWon";
  }
}


function mousePressed() {
  //Changing states during the mode selection page(adapted by Pouya from Jienan's Le Chartier Project)


  clicked = true;
  cellSize = width/gridSize;
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  //console.log("hello,state =", state);
  
//While in the character selection mode
  if (state === 2) {
    for (let i = 0; i < buttonAndTextPlacement.length; i++) {
      if (mouseX > buttonX - buttonWidth / 2 & mouseX < buttonX + buttonWidth / 2 & mouseY > buttonAndTextPlacement[i] * buttonY - buttonHeight / 2 & mouseY < buttonAndTextPlacement[i] * buttonY + buttonHeight / 2){
        state = difficulty[i];
    }
  }
}
  //Playing and stopping the playing of sounds according to the modes (Spasky and Charter) and displaying Blaviken when he is found (adapted by Jienan from Mr. Schellenberg's Game of Life Demo)
  if  (gridsDrawn===1){
    if (state === "Spasky" && grid[ycoord][xcoord] === 1 ) {
      stopAllSounds();
      //playSpaskyWinSound();
      grid[ycoord][xcoord] = 2;
      displayGrid();
      state = "spaskyChoose";
    } 
   else if (state === "Spasky" && grid[ycoord][xcoord] === 0){
      stopAllSounds();
      //playSpaskyLossSound();
    }
    else if (state === "Charter" && grid[ycoord][xcoord] === 1 ) {
      stopAllSounds();
      //playCharterWinSound();
      grid[ycoord][xcoord] = 2;
      displayGrid();
      state = "charterChoose";
    }
    else if (state === "Charter" && grid[ycoord][xcoord] === 0){
      stopAllSounds();
      //playCharterLossSound();
    }
  }

//Game selection for Spasky mode during the grids
  if (state === "spaskyChoose"){
    if (mouseX > width/4 && mouseX < width/4 * 3 && mouseY > height*3/8 - (height/6.5)/2 && mouseY < height*3/8 + (height/6.5)/2){
      state = "spaskyTag";
      stopAllBlavikenSounds();
    }
    if (mouseX > width/4 && mouseX < width/4 * 3 && mouseY > height*5/8 - (height/6.5)/2 && mouseY < height*5/8 + (height/6.5)/2){
      state = "spaskyNavigator";
    }
  }

  //Game selection for Charter mode during the grids
  if (state === "charterChoose"){
    if (mouseX > width/4 && mouseX < width/4 * 3 && mouseY > height*3/8 - (height/6.5)/2 && mouseY < height*3/8 + (height/6.5)/2){
      state = "charterTag";
      stopAllBlavikenSounds();
    }
    if (mouseX > width/4 && mouseX < width/4 * 3 && mouseY > height*5/8 - (height/6.5)/2 && mouseY < height*5/8 + (height/6.5)/2){
      state = "charterNavigator";
    }
  }

 // if (state === "Tag"){
   // stopAllBlavikenSounds();
  if (state === "spaskyTag" && (userWinCounter < 3 || userLossCounter < 3)) {
    stopAllBlavikenSounds();
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
      //stopAllBlavikenSounds();
      playBlavikenLossSound();
      userWinCounter++;
      hits ++;
    } 
    else {
      //stopAllBlavikenSounds();
      userLossCounter++;
      livesLeft --;
      if (userLossCounter>0){}
      playBlavikenWinSound();
    }  
  //}
     
   if (userWinCounter === 3){
    //  victory.setVolume(1.0);
    //  victory.play();
    //  userWinCounter ++;  
   }
  if (userLossCounter === 3){
    let today = day();
    let time = millis();
    let message = ["youLost", "buttKicked", "ohWell", "frustratedFace", "isThatAllYourBest", "sadFace", "booHoo", "badLuck", "sorry"];
    let choose = random(message);
    // image(user, 0, 0, width, height);
    // saveCanvas(choose + today + time, "jpg");
    // userLossCounter = 4;
  }
  //}
}

console.log("almost there.")
 // if (state === "Tag"){
   // stopAllBlavikenSounds();
   //if (state === "charterTag" && (userWinCounter < 3 || userLossCounter < 3)) {
  if (state === "charterTag"){
     console.log("charterTag state","position comparison:",mouseX,mouseY,rectX,rectY,"userWinCounter=",userWinCounter,"userLossCounter=",userLossCounter)
    stopAllBlavikenSounds();
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
      //console.log("position comparison:",mouseX,mouseY,rectX,rectY)
      //stopAllBlavikenSounds();
      playBlavikenLossSound();
      userWinCounter++;
      hits ++;
    } 
    else {
      //stopAllBlavikenSounds();
      userLossCounter++;
      livesLeft --;
      if (userLosscounter>0){}
      playBlavikenWinSound();
    }
     
   if (userWinCounter === 3){
    //  victory.setVolume(1.0);
    //  victory.play();
    //  userWinCounter ++; 
   }
  if (userLossCounter === 3){
    let today = day();
    let time = millis();
    let message = ["youLost", "buttKicked", "ohWell", "frustratedFace", "isThatAllYourBest", "sadFace", "booHoo", "badLuck", "sorry"];
    let choose = random(message);
    // image(user, 0, 0, width, height);
    // saveCanvas(choose + today + time, "jpg");
    // userLossCounter = 4;
  }
} 
}

function keyPressed() {
  console.log("state =", state);
  if ((state === "Spasky" || state === "Charter") && (key === "r" || key === "R" )){
    gridsDrawn = 0;
    state = 2;
    rectMode(CENTER);
    textAlign(CENTER);
    stopAllSounds();      
  }
  if ((state === "spaskyLooseScreen" || state === "spaskyWinScreen") && (key === "r" || key === "R")){
    state = "Spasky";
    gridsDrawn = 0;
    userLossCounter = 0;
    userWinCounter = 0;
    livesLeft = 4;
    hits = 0;
  }
  if ((state === "charterLooseScreen" || state === "charterWinScreen") && (key === "r" || key === "R")){
    state = "Charter";
    gridsDrawn = 0;
    userLossCounter = 0;
    userWinCounter = 0;
    livesLeft = 4;
    hits = 0;
  }

  if ((state === "spaskyLost" || state === "spaskyWon") && (key === "r" || key === "R")) {
    state = "Spasky";
    gridsDrawn = 0;
    ellipseX = 100;
    ellipseY = 100;
    ballWidthHeight = 40;
    ballRadius = 20;
    totalLives = 30;
  }

  if ((state === "charterLost" || state === "charterWon") && (key === "r" || key === "R")) {
    state = "Charter";
    gridsDrawn = 0;
    ellipseX = 100;
    ellipseY = 100;
    ballWidthHeight = 40;
    ballRadius = 20;
    totalLives = 30;
  }
}