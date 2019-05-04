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
  backgroundImage = loadImage("chaplin.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  skating = createVideo("skating.mp4");
  skating.hide(); 
  
  hat = createVideo("hat.mp4");
  hat.hide();     
  
  bird = createVideo("bird.mp4");
  bird.hide();
  
  bread = createVideo("bread.mp4");
  bread.hide();
  
  cocktail = createVideo("cocktail.mp4");
  cocktail.hide();
  
  pushed = createVideo("camera.mp4");
  pushed.hide();
  
  state = 0;
}

function draw() {
  if (state === 0){
    background(backgroundImage);
  }
  else{
    background(0);
    imageMode(CENTER);
    image(skating, width/2, height/2);
    image(hat, width/2, height/2);
    image(bird, width/2, height/2);
    image(bread, width/2, height/2);
    image(cocktail, width/2, height/2);
    image(pushed, width/2, height/2);
  }
}

 function mousePressed() {
   state = 1;
   chooseChaplinFilmToPlay();
 }

function chooseChaplinFilmToPlay(){
  choices = [1, 2, 3, 4, 5, 6];
  choose = random(choices);
  if (choose === 1){
    //image(skating, width/2, height/2);
    skating.show();
    skating.play();
  }
  if (choose === 2){
    //image(hat, width/2, height/2);
    hat.show();
    hat.play();
  }
  if (choose === 3){
    //image(bird, width/2, height/2);
    bird.show();
    bird.play();
  }
  if (choose === 4){
    //image(bread, width/2, height/2);
    bread.show();
    bread.play();
  }
  if (choose === 5){
    //image(cocktail, width/2, height/2);
    cocktail.show();
    cocktail.play();
  }
  if (choose === 6){
    //image(pushed, width/2, height/2);
    pushed.show();
    pushed.play();
  }
}
