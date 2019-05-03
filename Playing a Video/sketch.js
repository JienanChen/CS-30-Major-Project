// Playing a Video
// Jienan Chen
// May 3, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let chap;

function setup() {
  createCanvas(600, 600);
  chap = createVideo("skating.mp4");
  chap.hide(); // by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(chap, width/2, height/2); // draw the video frame to canvas
}

 function mousePressed() {
   chap.play(); // set the video to loop and start playing
 }
