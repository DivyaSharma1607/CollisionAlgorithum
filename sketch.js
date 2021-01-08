var fixedRect,movingRect,fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
fixedRect1= createSprite(200,100,50,80);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 if(isTouching(movingRect,fixedRect)){
   movingRect.shapeColor="pink";
   fixedRect.shapeColor="pink";
 }
 else if(isTouching(movingRect,fixedRect1)){
   movingRect.shapeColor="blue";
   fixedRect1.shapeColor="blue";
 }
 else{
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red";
  fixedRect1.shapeColor="red";
 }
  drawSprites();
}
