// The Chaplin Experience Version 2
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
let barber;
let cage;
let cocaine;
let couple;
let dictators;
let ending;
let glass;
let hitler;
let machine;
let maze;
let skating2;
let moustache;
let politics;
let puppets;

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

  barber = createVideo("assets/barber.mp4");
  barber.hide();

  cage = createVideo("assets/cage.mp4");
  cage.hide();

  cocaine = createVideo("assets/cocaine.mp4");
  cocaine.hide();

  couple = createVideo("assets/couple.mp4");
  couple.hide();

  dictators = createVideo("assets/dictators.mp4");
  dictators.hide();

  ending = createVideo("assets/ending.mp4");
  ending.hide();

  glass = createVideo("assets/glass.mp4");
  glass.hide();

  hitler = createVideo("assets/hitler.mp4");
  hitler.hide();

  machine = createVideo("assets/machine.mp4");
  machine.hide();

  maze = createVideo("assets/maze.mp4");
  maze.hide();

  skating2 = createVideo("assets/modern times skating.mp4");
  skating2.hide();

  moustache = createVideo("assets/moustache.mp4");
  moustache.hide();

  politics = createVideo("assets/politics.mp4");
  politics.hide();

  puppets = createVideo("assets/puppets.mp4");
  puppets.hide();

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
  if (state === "barber"){
    background(0);
    imageMode(CENTER);
    image(barber, width/2, height/2);
  }
  if (state === "cage"){
    background(0);
    imageMode(CENTER);
    image(cage, width/2, height/2);
  }
  if (state === "cocaine"){
    background(0);
    imageMode(CENTER);
    image(cocaine, width/2, height/2);
  }
  if (state === "couple"){
    background(0);
    imageMode(CENTER);
    image(couple, width/2, height/2);
  }
  if (state === "dictators"){
    background(0);
    imageMode(CENTER);
    image(dictators, width/2, height/2);
  }
  if (state === "ending"){
    background(0);
    imageMode(CENTER);
    image(ending, width/2, height/2);
  }
  if (state === "glass"){
    background(0);
    imageMode(CENTER);
    image(glass, width/2, height/2);
  }
  if (state === "hitler"){
    background(0);
    imageMode(CENTER);
    image(hitler, width/2, height/2);
  }
  if (state === "machine"){
    background(0);
    imageMode(CENTER);
    image(machine, width/2, height/2);
  }
  if (state === "maze"){
    background(0);
    imageMode(CENTER);
    image(maze, width/2, height/2);
  }
  if (state === "skating 2"){
    background(0);
    imageMode(CENTER);
    image(skating2, width/2, height/2);
  }
  if (state === "moustache"){
    background(0);
    imageMode(CENTER);
    image(moustache, width/2, height/2);
  }
  if (state === "politics"){
    background(0);
    imageMode(CENTER);
    image(politics, width/2, height/2);
  }
  if (state === "puppets"){
    background(0);
    imageMode(CENTER);
    image(puppets, width/2, height/2);
  }
}

 function mousePressed() {
if (state === 0){
  chooseChaplinFilmToPlay();
  }
 }

function chooseChaplinFilmToPlay(){
  choices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
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
  if (choose === 8){
    state = "barber";
    barber.play();
  }
  if (choose === 9){
    state = "cage";
    cage.play();
  }
  if (choose === 10){
    state = "cocaine";
    cocaine.play();
  }
  if (choose === 11){
    state = "couple";
    couple.play();
  }
  if (choose === 12){
    state = "dictators";
    dictators.play();
  }
  if (choose === 13){
    state = "ending";
    ending.play();
  }
  if (choose === 14){
    state = "glass";
    glass.play();
  }
  if (choose === 15){
    state = "hitler";
    hitler.play();
  }
  if (choose === 16){
    state = "machine";
    machine.play();
  }
  if (choose === 17){
    state = "maze";
    maze.play();
  }
  if (choose === 18){
    state = "skating 2";
    skating2.play();
  }
  if (choose === 19){
    state = "moustache";
    moustache.play();
  }
  if (choose === 20){
    state = "politics";
    politics.play();
  }
  if (choose === 21){
    state = "puppets";
    puppets.play();
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
  barber.stop();
  cage.stop();
  cocaine.stop();
  couple.stop();
  dictators.stop();
  ending.stop();
  glass.stop();
  hitler.stop();
  machine.stop();
  maze.stop();
  skating2.stop();
  moustache.stop();
  politics.stop();
  puppets.stop();
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    stopVideos();
    imageMode(CORNERS)
    state = 0;
  }
  }

