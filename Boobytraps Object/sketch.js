// Bopobytraps Object
// Jienan Chen
// May 27, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Boobytraps {
  constructor(x, y, someColor) {
    this.x = x;
    this.y = y;
    this.color = someColor;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    ellipse(this.x, this.y, 2, 2);
  }
}

let traps = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<500; i++) {
    let someTrap = new Boobytraps(random(width), random(height), color(random(255), random(255), random(255)));
    traps.push(someTrap);
  }
}

function draw() {
  for (let i=0; i<traps.length; i++) {
    traps[i].display();
  }
}
