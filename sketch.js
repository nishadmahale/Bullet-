var bullet,wall;
var thickness;


function setup () {

     createCanvas(1600,800);
    
    
    
    speed=random(55,90);
    
    weight=random(400,1500);
     thickness=random(22,83);
    
    
  

    bullet=createSprite(50,400,40,20);
    wall=createSprite(1300,400,30,90);

    bullet.velocityX=speed;

    
   

    




}


function draw(){
     background("Green");
    
    
   
if(hasColided (bullet,wall)) {
        
        bullet.velocityX=0;

       damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

      if(damage>10){
          bullet.shapeColor=color(255,0,0);
        }
      if (damage<10){
          bullet.shapeColor=color(0,255,0);
    
        } 
  }   

drawSprites();
}


function hasColided(Lbullet,Lwall) {
  bulletRightEdge=Lbullet.x+bullet.width;
  wallLeftEdge=Lwall.x  

  if(bulletRightEdge>=wallLeftEdge) {

    return true;



  }

    return false;




}
