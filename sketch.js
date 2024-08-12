
let cor;
let vertical;
let horizontl;

function setup() {
  createCanvas(400, 400);
  background("rgb(199,221,245)");
  cor=color(random(0,255),random(0,255),random(0,255))
  
  horizontal=200;
  vertical=200;
}

function draw() {
  circle(horizontal, vertical,35);
  fill (cor);
  
  if(mouseX < horizontal) {
    horizontal --
  }
}
