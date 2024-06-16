let genRectSizeCounter = 0;
let genSquareSizeCounter = 0;
let genEllipseSizeCounter = 0;
let genTriangleSizeCounter = 0;
let clickOne = [null,null];
let clickTwo = [null,null];
let clickThree = [null,null];
let selection;
let selectionType;


function setup() {
  createCanvas(400, 400);
  extraCanvas = createGraphics(400,400);
  extraCanvas.clear();
  selection = "a";
}

// draw is a loop that executes constantly like a "do loop"
function draw() {
  background(0);
  image(extraCanvas,0,0);

  if(selection == "true" && selectionType == "Rectangle"){
    CreateRectangle();
  }

  if(selection == "true" && selectionType == "Square"){
    CreateSquare();
  }

  if(selection == "true" && selectionType == "Ellipse"){
    CreateEllipse();
  }

  if(selection == "true" && selectionType == "Triangle"){
    CreateTriangle();
  }
}

function mouseClicked(){
  if(selection == "true" && selectionType == "Rectangle"){
    genRectSizeCounter++;

    if(genRectSizeCounter == 3){
      console.log("click three");
    }
  
    if(genRectSizeCounter == 2){
      clickTwo = [mouseX, mouseY];
      console.log("click two confirmed")
    }
  
    if(genRectSizeCounter == 1){
      clickOne = [mouseX,mouseY];
      console.log("click one confirmed")
    }
  }

  if(selection == "true" && selectionType == "Square"){
    genSquareSizeCounter++;

    if(genSquareSizeCounter == 3){
      console.log("click three");
    }
  
    if(genSquareSizeCounter == 2){
      clickTwo = [mouseX, mouseY];
      console.log("click two confirmed")
    }
  
    if(genSquareSizeCounter == 1){
      clickOne = [mouseX,mouseY];
      console.log("click one confirmed")
    }
  }

  if(selection == "true" && selectionType == "Ellipse"){
    genEllipseSizeCounter++;

    if(genEllipseSizeCounter == 3){
      console.log("click three");
    }
  
    if(genEllipseSizeCounter == 2){
      clickTwo = [mouseX, mouseY];
      console.log("click two confirmed")
    }
  
    if(genEllipseSizeCounter == 1){
      clickOne = [mouseX,mouseY];
      console.log("click one confirmed")
    }
  }

  if(selection == "true" && selectionType == "Triangle"){
    genTriangleSizeCounter++;

    if(genTriangleSizeCounter == 3){
      clickThree = [mouseX, mouseY];
      console.log("click three");
    }
  
    if(genTriangleSizeCounter == 2){
      clickTwo = [mouseX, mouseY];
      console.log("click two confirmed")
    }
  
    if(genTriangleSizeCounter == 1){
      clickOne = [mouseX,mouseY];
      console.log("click one confirmed")
    }
  }
}

function ButtonSelectRectangle(){
  selection = "true";
  selectionType = "Rectangle";
  console.log("rectangle selected")
  genRectSizeCounter = -1;
}

function CreateRectangle(){
  if(selection == "true" && selectionType == "Rectangle"){
    if(genRectSizeCounter == 1){
      stroke(255);
      noFill();
      rect(clickOne[0], clickOne[1], mouseX-clickOne[0], mouseY-clickOne[1])
      
    }
  
    if(genRectSizeCounter == 2){
      console.log("extra canvas created");
      extraCanvas.fill(random(0,256),random(0,256),random(0,256));
      extraCanvas.rect(clickOne[0], clickOne[1], clickTwo[0]-clickOne[0], clickTwo[1]-clickOne[1]);
      genRectSizeCounter = 0;
    }
  }
}

function ButtonSelectSquare(){
  selection = "true";
  selectionType = "Square";
  console.log("Square selected")
  genSquareSizeCounter = -1;
}

function CreateSquare(){
  if(selection == "true" && selectionType == "Square"){
    if(genSquareSizeCounter == 1){
      stroke(255);
      noFill();
      //       x            y              size
      square(clickOne[0], clickOne[1], mouseY-clickOne[1])
      
    }
  
    if(genSquareSizeCounter == 2){
      console.log("extra canvas created");
      extraCanvas.fill(random(0,256),random(0,256),random(0,256));
      extraCanvas.square(clickOne[0], clickOne[1], clickTwo[0]-clickOne[0]);
      genSquareSizeCounter = 0;
    }
  }
}

function ButtonSelectEllipse(){
  selection = "true";
  selectionType = "Ellipse";
  console.log("Ellipse selected")
  genEllipseSizeCounter = -1;
}

function CreateEllipse(){
  if(selection == "true" && selectionType == "Ellipse"){
    if(genEllipseSizeCounter == 1){
      stroke(255);
      noFill();
      ellipse(clickOne[0], clickOne[1], (mouseX-clickOne[0])*2, (mouseY-clickOne[1])*2);
      
    }
  
    if(genEllipseSizeCounter == 2){
      console.log("extra canvas created");
      extraCanvas.fill(random(0,256),random(0,256),random(0,256));
      extraCanvas.ellipse(clickOne[0], clickOne[1], (clickTwo[0]-clickOne[0])*2, (clickTwo[1]-clickOne[1])*2);
      genEllipseSizeCounter = 0;
    }
  }
}

function ButtonSelectTriangle(){
  selection = "true";
  selectionType = "Triangle";
  console.log("Triangle selected")
  genTriangleSizeCounter = -1;
}

function CreateTriangle(){
  if(selection == "true" && selectionType == "Triangle"){
    if(genTriangleSizeCounter == 2){
      stroke(255);
      noFill();
      triangle(clickOne[0], clickOne[1], clickTwo[0], clickTwo[1], mouseX, mouseY)
      
    }
  
    if(genTriangleSizeCounter == 3){
      console.log("extra canvas created");
      extraCanvas.fill(random(0,256),random(0,256),random(0,256));
      extraCanvas.triangle(clickOne[0], clickOne[1], clickTwo[0], clickTwo[1], clickThree[0], clickThree[1])
      genTriangleSizeCounter = 0;
    }
  }
}

function ButtonClear(){
  selection = null;
  selectionType = null;
  extraCanvas.background(0);
}
