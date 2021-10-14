var bg,bgImg;
var player, shooterImg, shooter_shooting;
var thanos, thanosImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var thanosGroup;



function preload(){
  
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  shooterImg = loadImage("assets/shooter_1.png")
  shooter_shooting = loadImage("assets/shooter_2.png")

  thanosImg = loadImage("assets/thanos.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


   //creating sprites to depict lives remaining
   heart1 = createSprite(displayWidth-150,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4
   

    //creating group for thanos    
    thanosGroup = new Group();
}

function draw() {
  background(0); 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  
  player.addImage(shooter_shooting)
  
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}


//destroy thanos when player touches it
if(thanosGroup.isTouching(player)){
 

 for(var i=0;i<thanosGroup.length;i++){     
      
  if(thanosGroup[i].isTouching(player)){
       thanosGroup[i].destroy()
       } 
 }
}

//calling the function to spawn thanos
enemy();

drawSprites();
}



//creating function to spawn thanos
function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for thanos to appear
    thanos = createSprite(random(500,1100),random(100,500),40,40)

    thanos.addImage(thanosImg)
    thanos.scale = 0.15
    thanos.velocityX = -3
    thanos.debug= true
    thanos.setCollider("rectangle",0,0,400,400)
   
    thanos.lifetime = 400
   thanosGroup.add(thanos)
  }

}
