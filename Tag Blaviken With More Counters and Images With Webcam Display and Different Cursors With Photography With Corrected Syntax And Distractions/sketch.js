// Tag Blaviken (Eigth Version)
// Jienan Chen
// June 11, 2019
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

let blaviken;
let winImage;
let lossImage;
let finger;

let rectX, rectY;
let rectWidth, rectHeight;

let imageRectWidth , imageRectHeight;

let win1, win2, win3, win4, win5, win6, win7, win8;
let loss1, loss2, loss3, loss4, loss5, loss6, loss7, loss8, loss9;
let victory;

let userLossCounter;
let userWinCounter;
let livesLeft;
let hits;

let user;

let state;

let distractions = [];

function preload() {
  blaviken = loadImage("assets/20180411_154733 (1) (1)A.jpg");
  winImage = loadImage("assets/DSC01815.JPG");
  lossImage = loadImage("assets/Capture15.JPG");
  finger = loadImage("assets/finger.png");

  win1 = loadSound("assets/BlavikenWin1.m4a");
  win2 = loadSound("assets/BlavikenWin2.m4a");
  win3 = loadSound("assets/BlavikenWin3.m4a");
  win4 = loadSound("assets/BlavikenWin4.m4a");
  win5 = loadSound("assets/BlavikenWin5.m4a");
  win6 = loadSound("assets/BlavikenWin6.m4a");
  win7 = loadSound("assets/BlavikenWin7.m4a");
  win8 = loadSound("assets/BlavikenWin8.m4a");

  loss1 = loadSound("assets/BlavikenLoss1.m4a");
  loss2 = loadSound("assets/BlavikenLoss2.m4a");
  loss3 = loadSound("assets/BlavikenLoss3.m4a");
  loss4 = loadSound("assets/BlavikenLoss4.m4a");
  loss5 = loadSound("assets/BlavikenLoss5.m4a");
  loss6 = loadSound("assets/BlavikenLoss6.m4a");
  loss7 = loadSound("assets/BlavikenLoss7.m4a");
  loss8 = loadSound("assets/BlavikenLoss8.m4a");
  loss9 = loadSound("assets/BlavikenLoss9.m4a");

  victory = loadSound("assets/victory.m4a");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / 9.78;
  rectHeight = width / 9;
  rectX = random(0, width - rectWidth);
  rectY = random(0, height - rectHeight);
  imageRectWidth = width / 2;
  imageRectHeight = width / 3.2;
  userLossCounter = 0;
  userWinCounter = 0;
  //livesLeft = 3;
  hits = 0;
  user = createCapture(VIDEO);
  user.size(width/4, height/4);
  user.hide();
  state = 0;

  let choices = ["beige", "black", "orange", "purple", "yellow"];
  for (let i=0; i< 36; i++) {
    let colour = random(choices);
    let vex = new Distractions(random(width), random(height), random(75, 250), random(choices), blaviken, 5);
    distractions.push(vex);
  }
}

function draw() {
  if (state === 0) {
    background(random(125, 250));
    displayBlaviken();
    noCursor();

    for (let i=0; i<distractions.length; i++) {
      distractions[i].move();
      distractions[i].display();
    }

    imageMode(CENTER);
    image(finger, mouseX, mouseY + 5, width/27, height/8);
    
    moveRect();
    drawLines();
    progressiveLines();
    drawPoints();
    displayLivesLeft();
    displayHits();

    imageMode(CORNER);
    image(user, 0, height - (height/4+40));

    //writeInstructions();
    gameOver();
  }
  if (state === 1){
    stopAllSounds();
    imageMode(CENTER);
    cursor(CROSS);
    image(lossImage, width/2, height/2, width/1.3, height/1.7);
  }
  if (state === 2){
    stopAllSounds();
    imageMode(CENTER);
    noCursor();
    image(winImage, width/2, height/2, width/1.3, height/1.7);
  } 
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

function writeInstructions(){
  textAlign(CENTER);
  fill("maroon");
  textSize (floor(width/32));
  text("Click on Blaviken three times to win if you can !", width/2, height/13);
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
  if (rectX + rectWidth >= width || rectX <= 0) {
    rectX = random(0, width - rectWidth);
  }
  if (rectY + rectHeight >= height || rectY <= 0) {
    rectY = random(0, height - rectHeight);
  }
}

function gameOver() {
  if (userLossCounter > 2) {
    stopAllSounds();
    clear();
    state = 1;
  }
  if (userWinCounter > 2) {
    stopAllSounds();
    clear();
    state = 2;
  }
}

function playWinSound() {
  let choice = floor(random(1, 9));
  if (choice === 1) {
    win1.play();
    win1.setVolume(0.5);
  }
  if (choice === 2) {
    win2.play();
    win2.setVolume(0.5);
  }
  if (choice === 3) {
    win3.play();
    win3.setVolume(0.5);
  }
  if (choice === 4) {
    win4.play();
    win4.setVolume(0.5);
  }
  if (choice === 5) {
    win5.play();
    win5.setVolume(0.5);
  }
  if (choice === 6) {
    win6.play();
    win6.setVolume(0.5);
  }
  if (choice === 7) {
    win7.play();
    win7.setVolume(0.5);
  }
  if (choice === 8) {
    win8.play();
    win8.setVolume(0.5);
  }
}

function playLossSound() {
  let choice = floor(random(1, 10));
  if (choice === 1) {
    loss1.play();
    loss1.setVolume(0.9);
  }
  if (choice === 2) {
    loss2.play();
    loss2.setVolume(0.9);
  }
  if (choice === 3) {
    loss3.play();
    loss3.setVolume(0.9);
  }
  if (choice === 4) {
    loss4.play();
    loss4.setVolume(0.9);
  }
  if (choice === 5) {
    loss5.play();
    loss5.setVolume(0.9);
  }
  if (choice === 6) {
    loss6.play();
    loss6.setVolume(0.9);
  }
  if (choice === 7) {
    loss7.play();
    loss7.setVolume(0.9);
  }
  if (choice === 8) {
    loss8.play();
    loss8.setVolume(0.9);
  }
  if (choice === 9) {
    loss9.play();
    loss9.setVolume(0.9);
  }
}

function stopAllSounds() {
  win1.stop();
  win2.stop();
  win3.stop();
  win4.stop();
  win5.stop();
  win6.stop();
  win7.stop();
  win8.stop();

  loss1.stop();
  loss2.stop();
  loss3.stop();
  loss4.stop();
  loss5.stop();
  loss6.stop();
  loss7.stop();
  loss8.stop();
  loss9.stop();
}

function mousePressed() {
  stopAllSounds();
  if (state === 0 && (userWinCounter < 3 || userLossCounter < 3)) {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
      playLossSound();
      userWinCounter++;
      hits ++;
    } 
    else {
      playWinSound();
      userLossCounter++;
      livesLeft --;
    }
  }
  if (userWinCounter === 3){
    victory.setVolume(1.0);
    victory.play();
    userWinCounter ++;
  }
  if (userLossCounter === 3){
    let today = day();
    let time = millis();
    let message = ["youLost", "buttKicked", "ohWell", "frustratedFace", "isThatAllYourBest", "sadFace", "booHoo", "badLuck", "sorry"];
    let choose = random(message);
    image(user, 0, 0, width, height);
    saveCanvas(choose + today + time, "jpg");
    userLossCounter = 4;
  }
}

function keyPressed(){
  if (keyCode === LEFT_ARROW && (state === 1 ||state === 2)){
    //state = 0;
    background(255);
    //clear();
    redraw();
  }
}



