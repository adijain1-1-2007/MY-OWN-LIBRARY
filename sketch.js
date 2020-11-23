var moving;
var fixed;
var obj1,obj2,obj3;


function setup() {
  createCanvas(1200,800);
  fixed =createSprite(400, 200, 80, 50);
  moving=createSprite(200,200,50,80);
  fixed.shapeColor="red";
  moving.shapeColor="green";
  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor="grey";
  obj2=createSprite(200,100,50,50);
  obj2.shapeColor="black";
  obj3=createSprite(300,100,50,50);
  obj3.shapeColor="maroon";


}

function draw() {
  background(255,255,255);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  bounceOff(moving,obj2)
if (isTouching(moving,obj1)){
  moving.shapeColor="yellow";
        obj1.shapeColor="violet";
}
else{
  obj1.shapeColor="red";
  moving.shapeColor="green";
}
  drawSprites();
}
