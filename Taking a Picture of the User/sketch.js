// Taking a Picture of the User (Version 1)
// Jienan Chen
// May 16-17, 2019
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let user;
let button1;
let button2;
let state;

function setup() {
  createCanvas(400, 400);
  createP("");
  let button1 = createButton("Camera On");
  button1.mousePressed(cameraOn);
  let button2 = createButton("Camera Off");
  button2.mousePressed(cameraOff);
  user = createCapture(VIDEO);
  user.hide();
  
  let state = 0; 
}

function draw() {
  background(220);
  if (state === 1){
    cameraOn();
  }
  if (state === 2){
    cameraOff();
  }
}

function cameraOn(){
  state = 1;
  image(user, 0, 0, width, height);
}

function cameraOff(){
  state = 2;
  clear();
}

function mousePressed(){
  if (state === 1 && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    let today = day();
    let time = millis();
    saveCanvas("p5photo" + today + time, "jpg");
  }
}
