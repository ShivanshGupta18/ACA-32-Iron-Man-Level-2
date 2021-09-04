
var bg, backgroundImg;
var ironman, ironman_image;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironman_image = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
  bg.velocityY = -5;
  ironman = createSprite(50,525,20,50);
  ironman.addImage(ironman_image);
  ironman.scale = 0.3;

  ground = createSprite(200,585,1500,10);
  ground.visible = false;
}

function draw() {
  if(keyDown("up")){
    ironman.velocityY = -10;
  }
  if(keyDown("left")){
    ironman.velocityX -= 3;
  }
  if(keyDown("right")){
    ironman.velocityX += 3;
  }
  ironman.velocityY += 0.5;
  ironman.collide(ground);
  ironman.setCollider("rectangle",100,0,200,400);
    drawSprites();
   
}

