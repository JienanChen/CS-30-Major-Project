// Displaying Different Species of Booby Traps
// Jienan Chen
// May 26, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



class WeakestBoobytraps {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill("blue");
    stroke("blue");
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
    fill("silver");
    stroke("silver");
    ellipse(this.x, this.y, 5, 5);
  }
}

let weakestTraps = [];
let nextWeakestTraps = [];
let mediocreTraps = [];
let secondMostPowerfulTraps = [];
let best = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < 7; i++) {
    let someWeakTrap = new WeakestBoobytraps(random(width + 7), random(height - 7));
    weakestTraps.push(someWeakTrap);
  }
  for (let i = 0; i < 5; i++) {
    let someOtherWeakTrap = new SecondWeakestBoobytraps(random(width + 7), random(height - 7));
    nextWeakestTraps.push(someOtherWeakTrap);
  }
  for (let i = 0; i < 4; i++) {
    let someMediocreTrap = new MediocreBoobytraps(random(width + 7), random(height - 7));
    mediocreTraps.push(someMediocreTrap);
  }
  for (let i = 0; i < 2; i++) {
    let someAlmostTrap = new SecondMostPowerfulBoobytraps(random(width + 13), random(height - 6));
    secondMostPowerfulTraps.push(someAlmostTrap);
  }
  for (let i = 0; i < 2; i++) {
    let someGoodTrap = new MostPowerfulBoobytraps(random(width + 13), random(height - 6));
    best.push(someGoodTrap);
  }
}

function draw() {
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
}


