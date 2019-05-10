// Tag Blaviken (Second Version)
// Jienan Chen
// May 9, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let blaviken;
let winImage;
let lossImage;

let rectX, rectY;
let rectWidth, rectHeight;

let win1, win2, win3, win4, win5, win6, win7, win8;
let loss1, loss2, loss3, loss4, loss5, loss6, loss7, loss8, loss9;
let victory;

let userLossCounter;
let userWinCounter;
let livesLeft;

let state;

function preload() {
  blaviken = loadImage("assets/20180411_154733 (1) (1)A.jpg");
  winImage = loadImage("assets/DSC01815.JPG");
  lossImage = loadImage("assets/Capture15.JPG");

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
  createCanvas(400, 400);
  rectWidth = width / 6.78;
  rectHeight = width / 6;
  rectX = random(0, width - rectWidth);
  rectY = random(0, height - rectHeight);
  imageRectWidth = width / 2;
  imageRectHeight = width / 3.2;
  userLossCounter = 0;
  userWinCounter = 0;
  livesLost = 3;
  state = 0;
}

function draw() {
  if (state === 0) {
    background(random(125, 250));
    displayBlaviken();
    moveRect();
    drawLines();
    progressiveLines();
    drawPoints();
    displayLivesLeft();
    gameOver();
  }
  if (state === 1){
    imageMode(CENTER);
    image(lossImage, width/2, height/2, width/1.3, height/1.7);
  }
  if (state === 2){
    imageMode(CENTER);
    image(winImage, width/2, height/2, width/1.3, height/1.7);
  } 
}

function displayBlaviken() {
  stroke("red");
  strokeWeight(7);
  smooth();
  rect(rectX, rectY, rectWidth, rectHeight);
  image(blaviken, rectX, rectY);
  //tint(random(0, 255), random(0, 255));
  blaviken.resize(rectWidth, rectHeight);
}

function drawLines() {
  strokeWeight(random(1, 10));
  stroke(random(48, 250));
  line(0, random(height), height, random(height));
  line(random(width), 0, height, random(width));
  curve(random(width), random(width), random(width), random(width), random(height), random(height), random(height), random(height));
}

function progressiveLines() {
  for (i = 0; i < width; i += 20) {
    stroke(random(100, 220))
    strokeWeight(3);
    line(i, 0, i, height);
  }
}

function drawPoints() {
  stroke(random(0, 255));
  strokeWeight(random(1, 35));
  point(random(width), random(height));
}

function displayLivesLeft(){
  let livesWidth = width/5.79;
  let livesHeight = width/4.4;
  noStroke();
  fill(255, 255, 255, 100);
  rect(width - livesWidth, 0, livesWidth, livesHeight);
  textAlign(CENTER);
  textSize(width/13)
  fill(0);
  text(livesLost, width-livesWidth + livesWidth/2, livesHeight/1.75)
}

function moveRect() {
  rectX += 5;
  rectY += random(-35, 35);
  if (rectX + rectWidth >= width || rectX <= 0) {
    rectX = (random(0, width - rectWidth));
  }
  if (rectY + rectHeight >= height || rectY <= 0) {
    rectY = (random(0, height - rectHeight));
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
  //return state;
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
  if (userWinCounter < 3 || userLossCounter < 3) {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
      playLossSound();
      userWinCounter++;
      //console.log("win = ", userWinCounter);
    } else {
      playWinSound();
      userLossCounter++;
      livesLost --;
      //console.log("loss = ", userLossCounter)
    }
  }
  if (userWinCounter === 3){
    victory.setVolume(1.0);
    victory.play();
  }
}

function keyPressed(){
  if (keyCode === LEFT_ARROW && (state === 1 ||state === 2)){
    state = 0;
  }
}

