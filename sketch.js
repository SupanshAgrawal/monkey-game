
var monkey , monkey_running,monketcollide
var banana ,bananaImage, obstacle, obstacleimage
var bananagroup, obstaclegroup
var score=0;
var ground;
var PLAY=0;
var END=1;
var gameState=PLAY;
var bananascore=0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  monkeycollide=loadAnimation("sprite_0.png")

  
  
  bananaImage = loadImage("banana.png");
  obstacleimage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  
    
  obstaclegroup=new Group();
  bananagroup=new Group();
  
  monkey=createSprite(80,230,10,10);
  monkey.scale=0.15;
  monkey.addAnimation("monkey",monkey_running);
   
  ground=createSprite(300,340,600,100);
  ground.scale=1;

  
  
      
  
  
  
}


function draw() {
  background("lightblue");
  fill ("black");
 
  text("SURVIVAL TIME="+score,470,20);
   text("Score: "+bananascore,300,20);
score = score + Math.round(getFrameRate()/60);
  
  
  obstacles();
  bananas();
  
  
  if(keyDown("space")&&(monkey.y >=200)) {
      monkey.velocityY = -15; 
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if (monkey.isTouching(bananagroup)){
      bananascore++;  
      bananagroup.destroyEach();
    
    }
    if (monkey.isTouching(obstaclegroup)){
     ground.setVelocityX = 0;
    
    monkey.addAnimation("monkey",monkeycollide);
    
    obstaclegroup.setVelocityXEach(0);
    bananagroup.setVelocityXEach(0);
    obstaclegroup.setLifetimeEach(-1);
    bananagroup.setLifetimeEach(-1);
    fill("red")
    stroke("black")
    textSize(30);
    text("GAMEOVER!!!", 220, 170);
    }
    

  
    
  
  

  drawSprites();
  
  monkey.collide(ground);
}

function obstacles(){
  if(frameCount%300===0){
    
   obstacle = createSprite(600,280,40,40);
    obstacle.addImage("rock", obstacleimage);
    obstacle.setCollider("circle", 0, 0, 150);
    obstacle.scale = 0.11 ;
    obstacle.velocityX = -4
    obstacle.lifetime = 220;
    obstaclegroup.add(obstacle);
    
    
    
  }
  
}
function bananas(){
   if (frameCount%80 === 0){
    
    banana = createSprite(620,120, 50, 50 )
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-4          
    banana.lifetime = 220;
    bananagroup.add(banana);
    

    
  }
}



