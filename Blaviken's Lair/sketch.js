// Blaviken's Lair (Version 1)
// Jienan Chen
// June 16, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class WeakestBoobytraps {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill("purple");
    stroke("purple");
    ellipse(this.x, this.y, 5, 5);
  }
}

class SecondWeakestBoobytraps {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill("orange");
    stroke("orange");
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
    fill("red");
    stroke("red");
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
    fill("green");
    stroke("green");
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
    fill("yellow");
    stroke("yellow");
    ellipse(this.x, this.y, 5, 5);
  }
}

let weakestTraps = [];
let nextWeakestTraps = [];
let mediocreTraps = [];
let secondMostPowerfulTraps = [];
let best = [];

let weakestX = []; 
let weakestY = [];

let nextX = [];
let nextY = [];

let mX = [];
let mY = [];

let secondX = [];
let secondY = [];

let bestX = [];
let bestY = [];

let ellipseX;
let ellipseY;
let ballRadius;

let targetX, targetY, targetWidth, targetHeight;

let totalLives;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 7; i++) {
    x1=random(width + 7);
    y1 = random(height -7);
    let someWeakTrap = new WeakestBoobytraps(x1, y1);
    weakestTraps.push(someWeakTrap);
    weakestX.push(x1);
    weakestY.push(y1);
    x1 = 0;
    y1 = 0;
  }
  for (let i = 0; i < 5; i++) {
    x2=random(width + 7);
    y2 = random(height -7);
    let someOtherWeakTrap = new SecondWeakestBoobytraps(x2, y2);
    nextWeakestTraps.push(someOtherWeakTrap);
    nextX.push(x2);
    nextY.push(y2);
    x2 = 0;
    y2 = 0;
  }
   for (let i = 0; i < 4; i++) {
    x3=random(width + 7);
    y3 = random(height -7);
    let someMediocreTrap = new MediocreBoobytraps(x3,y3);
    mediocreTraps.push(someMediocreTrap);
     mX.push(x3);
     mY.push(y3);
     x3 = 0;
     y3 = 0;   
  }
   for (let i = 0; i < 2; i++) {
     x4 = random(width + 13);
     y4 = random(height - 6)
    let someAlmostTrap = new SecondMostPowerfulBoobytraps(x4, y4);
    secondMostPowerfulTraps.push(someAlmostTrap);
     secondX.push(x4);
     secondY.push(y4);
     x4 = 0;
     y4 = 0;
  }
  for (let i = 0; i < 2; i++) {
    x5 = random(width + 13);
    y5 = random(height - 6);
    let someGoodTrap = new MostPowerfulBoobytraps(x5, y5);
    best.push(someGoodTrap);
    bestX.push(x5);
    bestY.push(y5);
    x5 = 0;
    y5 = 0;
  }
  
  ellipseX = 200;
  ellipseY = 200;
  ballRadius = 40;
  
  targetX = random(255, width - 100);
  targetY = random(255, height - 100);
  targetWidth = 100;
  targetHeight = 100;
  
  totalLives = 30;
}

function draw() {
  background(0);
  for (let i = 0; i< weakestTraps.length; i++) {
    weakestTraps[i].display();
  }
  for (let i = 0; i< nextWeakestTraps.length; i++) {
    nextWeakestTraps[i].display();
  }
  for (let i = 0; i< mediocreTraps.length; i++) {
    mediocreTraps[i].display();
  }
  for (let i = 0; i< secondMostPowerfulTraps.length; i++) {
   secondMostPowerfulTraps[i].display();
  }
  for (let i = 0; i< best.length; i++) {
   best[i].display();
  }
  moving();
  //hittingBoobyTraps();
  if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)){
    detectCollision();
  }
  
  showLivesLeft();
  
  target();
  
  fate();
}

function moving() {
  fill("red");
  noStroke();
  ellipseMode(CENTER);
  ellipse(ellipseX, ellipseY, ballRadius);
  
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
  console.log("x=",ellipseX,"y=",ellipseY)
}

// function hittingBoobyTraps() {
//    if (ellipseX === 200 && ellipseY === 200) {
//     console.log("hit");
//   }
//   else{
//     console.log("no");
//   }
//  }


function detectCollision(){
   let interval = 40- 5;
  
  for (let i = 0; i <weakestX.length; i ++){
    let distance1 = ((ellipseX - weakestX[i])**2 + (ellipseY -weakestY[i])**2)**0.5;
     if (distance1 <= interval){
      console.log(i,"1", "in the target");
       totalLives -= 2;
       ellipseX = 200;
       ellipseY = 200;
    }
      else{
      //console.log(i," out of the target");
  }
  }
  
  for (let i = 0; i <nextX.length; i ++){
    let distance2 = ((ellipseX - nextX[i])**2 + (ellipseY -nextY[i])**2)**0.5;
    if (distance2 <= interval){
      console.log(i, "2","in the target");
      totalLives -= 5;
      ellipseX = 200;
       ellipseY = 200;
    }
    else{
      //console.log(i," out of the target");
  }
  }
  
  for (let i = 0; i <mX.length; i ++){  
    let distance3 = ((ellipseX - mX[i])**2 + (ellipseY -mY[i])**2)**0.5;
     if (distance3 <= interval){
      console.log(i,"3", "in the target");
       totalLives -= 7;
       ellipseX = 200;
       ellipseY = 200;
    }
     else{
      //console.log(i," out of the target");
  }
  }
  
  for (let i = 0; i <secondX.length; i ++){  
    let distance4 = ((ellipseX - secondX[i])**2 + (ellipseY -secondY[i])**2)**0.5;
     if (distance4 <= interval){
      console.log(i,"4", "in the target");
       totalLives -= 10;
       ellipseX = 200;
       ellipseY = 200;
    }
        else{
      //console.log(i," out of the target");
  }
  }
  
  for (let i = 0; i < bestX.length; i ++){     
    let distance5 = ((ellipseX - bestX[i])**2 + (ellipseY -bestY[i])**2)**0.5;
       if (distance5 <= interval){
      console.log(i, "5","in the target");
         totalLives -= 15;
         ellipseX = 200;
         ellipseY = 200;
    }
      else{
      //console.log(i," out of the target");
  }
  }
    
    // console.log("i=",i,"xArray",i,"=",xArray[i],"yArray",i,"=",yArray[i],"eX=",eX,"eY=",eY,"distance=",distance);
    
}

function showLivesLeft(){
  // rectMode(CORNER);
  // fill(255, 255, 255, 100);
  // rect(width - 200, 0, 200, 230);
  
  textAlign(CENTER);
  textSize(40);
  fill(255);
  text("Lives Left", width - 200 /2, 80);
  text(totalLives, width - 200 / 2, 150);
}

function target(){
  rectMode(CORNER);
  fill("blue");
  rect(targetX, targetY, 100, 100);
}

function fate(){
  if (totalLives < 1){
    background(0);
  }
  
  //console.log("ellipseX=",ellipseX , "ellipseY=", ellipseY ,"targetX=", targetX,"targetX+targetWidth=" ,targetX+targetWidth, "targetY=",targetY,"targetY + targetHeight=" ,targetY + targetHeight);
  
  // console.log("leftX:",ellipseX - 20, targetX)
  // console.log("right X:",ellipseX + 20, targetWidth + targetX)
  // console.log("top Y:",ellipseY - 20 , targetY)
  // console.log("bottom Y:",ellipseY + 20 ,targetY + targetHeight)
  
  if (ellipseX - 20 > targetX && ellipseX + 20 < targetWidth + targetX && ellipseY - 20 >targetY && ellipseY + 20 < targetY + targetHeight){
    console.log("got it");
    background(255);
  }
}

