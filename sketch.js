function setup() {
    createCanvas(600, 600);
    background("yellow");
  }
  
  function draw() {
    
  
    stroke("green");
    fill("blue");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 35, 35);
    }
  }