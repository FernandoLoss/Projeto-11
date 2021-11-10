var ship, shipImg;
var sea, seaImg;
var invisibleSea;

function preload(){
seaImg =  loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  

  sea = createSprite(200,200,6000,6000);
  sea.addImage("sea", seaImg);
  sea.scale=0.2;

  invisibleSea= createSprite(200,300,200,20);
  invisibleSea.visible = false;

  ship = createSprite(200,230,20,20);
  ship.addAnimation("navegando", shipImg);
  ship.scale=0.3;
}

function draw() {
  background("blue");

  ship.collide(invisibleSea);
  sea.velocityX=-1;

  if(sea.x < 0) {
 sea.x= sea.width/2;
  }

    drawSprites();

}
