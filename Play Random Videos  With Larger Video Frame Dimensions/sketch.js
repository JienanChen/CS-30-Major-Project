// THe Chaplin Experience Version 2
// Jienan Chen
// May 4, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let backgroundImage;

let skate;
let cocktail;
let hat;
let chicken;
let pushed;
let bread;
let block;

let state;

function preload(){
  backgroundImage = loadImage("assets/chaplin.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  skate = createVideo("assets/skating.mp4");
  skate.hide(); 
  
  hat = createVideo("assets/hat.mp4");
  hat.hide();     
  
  bird = createVideo("assets/bird.mp4");
  bird.hide();
  
  bread = createVideo("assets/bread.mp4");
  bread.hide();
  
  cocktail = createVideo("assets/cocktail.mp4");
  cocktail.hide();
  
  pushed = createVideo("assets/camera.mp4");
  pushed.hide();

  block = createVideo("assets/block.mp4");
  block.hide();
  
  state = 0;
}

function draw() {
  if (state === 0){
    background(backgroundImage);
    fill(236, 251, 121);
    //Title
    textFont("Georgia")
    textSize(height*0.18);
    textAlign(CENTER);
    text("The Chaplin Experience", width/2, height/3);
    //Shading behind title
    rectMode(CENTER);
    noStroke();
    fill(123, 145, 181, 77);
    rect(width/2, height/3.5, width, height*0.342);
    //instructions
    textFont("Times New Romans");
    textSize(height*0.0625);
    fill(130, 135, 64);
    text("Click the image.\n To return to this page, click the LEFT_ARROW key.", width/2, height * 0.854)
  }
  if (state === "skate"){
    background(0);
    imageMode(CENTER);
    image(skate, width/2, height/2);
  }
  if (state === "hat"){
    background(0);
    imageMode(CENTER);
    image(hat, width/2, height/2);
  }
  if (state === "bird"){
    background(0);
    imageMode(CENTER);
    image(bird, width/2, height/2);
  }
  if (state === "bread"){
    background(0);
    imageMode(CENTER);
    image(bread, width/2, height/2);
  }
  if (state === "cocktail"){
    background(0);
    imageMode(CENTER);
    image(cocktail, width/2, height/2);
  }
  if (state === "pushed"){
    background(0);
    imageMode(CENTER);
    image(pushed, width/2, height/2);
  }
  if (state === "block"){
    background(0);
    imageMode(CENTER);
    image(block, width/2, height/2);
  }
}

 function mousePressed() {
if (state === 0){
  chooseChaplinFilmToPlay();
  }
 }

function chooseChaplinFilmToPlay(){
  choices = [1, 2, 3, 4, 5, 6, 7];
  choose = random(choices);
  if (choose === 1){
    state = "skate";
    skate.play();
  }
  if (choose === 2){
    state = "hat";
    hat.play();
  }
  if (choose === 3){
    state = "bird";
    bird.play();
  }
  if (choose === 4){
    state = "bread";
    bread.play();
  }
  if (choose === 5){
    state = "cocktail";
    cocktail.play();
  }
  if (choose === 6){
    state = "pushed";
    pushed.play();
  }
  if (choose === 7){
    state = "block";
    block.play();
  }
}

function stopVideos(){
  skate.stop();
  hat.stop();
  bird.stop();
  bread.stop();
  cocktail.stop();
  pushed.stop();
  block.stop();
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    stopVideos();
    imageMode(CORNERS)
    state = 0;
  }
  }

