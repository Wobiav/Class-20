function setup() {
 createCanvas(400,400);
mr = createSprite(300, 200, 50, 50);
fr = createSprite(100, 200, 50, 50);

fr.shapeColor="green";
mr.shapeColor="green";

mr.debug=true;
fr.debug=true;
 
mr.velocityX=-5;
//fr.velocityX=5; 

}

function draw() {
  background(0);  

if(fr.x-mr.x<fr.width/2 + mr.width/2 && 
  mr.x-fr.x<fr.width/2 + mr.width/2){
  fr.velocityX=-(fr.velocityX);
   mr.velocityX=-(mr.velocityX);
  }

  if(fr.y-mr.y<fr.height/2 + mr.height/2 && 
    mr.y-fr.y<fr.height/2 + mr.height/2){
      fr.velocityY=-(fr.velocityY);
      mr.velocityY=-(mr.velocityY);
    }

  //mr.y=mouseY;
  //mr.x=mouseX;

  drawSprites();
}