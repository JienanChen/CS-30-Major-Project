// Circle Borders Investigation
// Jienan Chen
// May 22, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipseMode(CENTER);
  ellipse(width/2, height/2, 200, 200);
  
  //center
  ellipse(width/2, height/2, 30, 30);
  
  //left
  ellipse(width/2 -100, height/2, 30, 30)
  
  //right
  ellipse(width/2 + 100 , height/2, 30, 30)
  
  //up
  ellipse(width/2, height/2 - 100, 30, 30);
  
  //down
  ellipse(width/2, height/2 + 100, 30, 30);
}
