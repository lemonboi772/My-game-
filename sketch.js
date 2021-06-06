function preload()
{
birdImg=loadImage("floppy bird.jpg");
backgroundImg=loadImage("background.jpg");
}



function setup() {
  createCanvas(1500,700);
 
  backgroundImg = createSprite(750,350,1500,700);
  backgroundImg.addImage("bg",backgroundImg);
  bird = createSprite(400,200,20,70);
  bird.addImage("bird",birdImg);
}
function draw() {
  background(0);  

  // jump/ move bird upwards
  if(keyDown("space"))
  {
    bird.velocityY = -10;
  }

  //gravity
  bird.velocityY = bird.velocityY + 0.5;

  
  
  drawSprites();
}