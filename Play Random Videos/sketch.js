// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let backgroundImage;

let skating;
let cocktail;
let hat;
let chicken;
let pushed;
let bread;

let choose;

let state;

function preload(){
  backgroundImage = loadImage("assets/chaplin.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  skating = createVideo("assets/skating.mp4");
  skating.hide(); 
  
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
  
  state = 0;
}

function draw() {
  if (state === 0){
    background(backgroundImage);
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
}

 function mousePressed() {
   chooseChaplinFilmToPlay();
 }

function chooseChaplinFilmToPlay(){
  choices = [1, 2, 3, 4, 5, 6];
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
    state.play();
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
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    state = 0;
  }
  }

