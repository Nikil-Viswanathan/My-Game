
var gameState = "Forest"; 
var Player , PlayerAnim;
var Player2 , Player2Anim;
var bg,bgImg ,bg2,bgImg2 , bg3 , bgImg3;
var Enemy1 , Enemy1Anim;
var Enemy2 , Enemy2Anim;
var map, mapImg;
var sword , swordImg;
var ground , invisground;
var PlayerHeartImg , BlueHeartImg , PlayerHeart , BlueHeart;
var PlayerHealth = 30;
var BlueGhostHealth = 30;
var firehealth = 30;
var COUNT = 1;
var COUNT2 = 1;
var song;
var mark , desertmark;
var arrow , arrowimg;
var FireHeart , FireHeartImg;
var leftButton , rightButton , upButton;
var leftButton2 , rightButton2 , upButton2;
var bgfork , bgforkImg;
var uparrow , uparrowImg;
var dgarrow , dgarrowImg;
var firebombs , firebombsimg;
var firebombsgroup;
var firebombs2 , firebombs2img , firebombsgroup2;
var gameover , gameoverimg;
var instructions , instructionsimg;
var hitboxbutton , hitboxbuttonoff;
var restart , restartimg;
var nextbutton;
var bgcolor , blocksprite;
var taphere , taphereImg;
var taphere2 , taphere3 , taphere4 , taphere5 , taphere6
var puzzle2reset , puzzle2resetImg;

function preload(){
    PlayerAnim=loadAnimation("Player/P1.png","Player/P2.png","Player/P3.jpg");
    Player2Anim=loadAnimation("NinjaPlayer1.png" , "NinjaPlayer2.png" , "NinjaPlayer3.png" , "NinjaPlayer4.png","NinjaPlayer5.png","NinjaPlayer6.png","NinjaPlayer7.png","NinjaPlayer8.png","NinjaPlayer9.png");
    bgImg = loadImage("Forest.jpg");
    bgImg2 =loadImage("Background2.png");
    bgImg3 = loadImage("Background3.jpg");
    bgforkImg = loadImage("ForestFork.jpg");
    instructionsimg = loadImage("Instructions.png");
    Enemy1Anim = loadAnimation("EnemyNo1/Enemy1.png" , "EnemyNo1/Enemy2.png" , "EnemyNo1/Enemy3.png" , "EnemyNo1/Enemy4.png" , "EnemyNo1/Enemy5.png"
    , "Enemy1Attack/Enemy1Attack1.png", "Enemy1Attack/Enemy1Attack2.png", "Enemy1Attack/Enemy1Attack3.png", "Enemy1Attack/Enemy1Attack4.png", "Enemy1Attack/Enemy1Attack5.png"
    , "Enemy1Attack/Enemy1Attack6.png", "Enemy1Attack/Enemy1Attack7.png", "Enemy1Attack/Enemy1Attack8.png", "Enemy1Attack/Enemy1Attack9.png", "Enemy1Attack/Enemy1Attack10.png"
    , "Enemy1Attack/Enemy1Attack11.png", "Enemy1Attack/Enemy1Attack12.png", "Enemy1Attack/Enemy1Attack13.png")
    Enemy2Anim =loadAnimation("EnemyNo2/2Enemy1.png","EnemyNo2/2Enemy2.png","EnemyNo2/2Enemy3.png","EnemyNo2/2Enemy4.png","EnemyNo2/2Enemy5.png","EnemyNo2/2Enemy6.png","EnemyNo2/2Enemy7.png","EnemyNo2/2Enemy8.png","EnemyNo2/2Enemy9.png","EnemyNo2/2Enemy10.png","EnemyNo2/2Enemy11.png","EnemyNo2/2Enemy12.png",
    "EnemyNo2/2Enemy13.png","EnemyNo2/2Enemy14.png","EnemyNo2/2Enemy15.png","EnemyNo2/2Enemy16.png")
    mapImg = loadImage("map1.jpg");
    swordImg = loadImage("Sword.png");
    PlayerHeartImg = loadImage("GameHeart.png");
    BlueHeartImg = loadImage("GameHeartBlue.png");
    FireHeartImg = loadImage("HeartFire.png");
    arrowimg = loadImage("Arrow.jpg");
    uparrowImg = loadImage("UpArrow.png");
    dgarrowImg = loadImage("Diagonal Arrow.png");
    Forestsong = loadSound("Forest Background Music.mp3");
    firebombsimg=loadImage("fireball.png");
    firebombs2img=loadImage("fireball2.png")
    gameoverimg = loadImage("GameOver.jpg");
    restartimg = loadImage("Restart.png");
    taphereImg = loadImage("TapHere.png");
    puzzle2resetImg = loadImage("Next.png");
}



function setup(){
createCanvas(displayWidth - 20 , displayHeight -20);

    bg = createSprite(displayWidth/2 , displayHeight/2,displayWidth,displayHeight)
    bg.addImage(bgImg);
    bg.scale = 3.5
    
    bg2 = createSprite(displayWidth/2  , displayHeight/2, displayWidth-100 ,displayHeight-70 );
    bg2.addImage(bgImg2);
    bg2.scale = 2.5;
    bgfork = createSprite(displayWidth/2 , displayHeight/2, displayWidth - 100 , displayHeight - 70);
    bgfork.addImage(bgforkImg);
    bgfork.visible = false;
    
   uparrow = createSprite(displayWidth/2 - 400 , displayHeight - 300 , 10 , 10);
   uparrow.addImage(uparrowImg);
   uparrow.scale = 0.2;
   uparrow.visible = false;
   dgarrow = createSprite(displayWidth/2 + 200 , displayHeight - 300, 10 , 10)
  dgarrow.addImage(dgarrowImg);
  dgarrow.scale = 0.2;
  dgarrow.visible = false;
    sword = createSprite(100 , 100 ,10 ,10);
    sword.addImage(swordImg);
    sword.scale = 0.1;
        sword.visible = false;
    Player = createSprite(displayWidth/2 - 400 , displayHeight - 160 , 50 ,50)
    Player.addAnimation("PlayerImg" , PlayerAnim);
   Player2 = createSprite(displayWidth/2 - 400 , displayHeight - 200 , 50 , 50)
    Player2.addAnimation("Player2Img" , Player2Anim);
    Player2.scale = 1.5;
    Enemy1 = createSprite(displayWidth/2 + 70 , displayHeight - 300 ,50,50);
    Enemy1.scale = 2;
    Enemy1.addAnimation("Enemy1Img" , Enemy1Anim );
  
    Enemy1.setCollider("Rectangle" , 0 , 0 , 100 , 100);
Enemy2 = createSprite(displayWidth/2 + 100 , displayHeight - 150 ,50 ,50);
Enemy2.scale = 3;
Enemy2.addAnimation("Enemy2Img" , Enemy2Anim);
Enemy2.setCollider("Rectangle" , 0 , 0 , 100 , 100);
Enemy2.visible = false;
firebombsgroup = new Group();
firebombsgroup2 = new Group();
map = createSprite(displayWidth/2 - 650 , windowHeight - 650 ,200, 200);
map.addImage(mapImg)
map.scale =0.3;
gameover = createSprite(displayWidth/2 , displayHeight/2 , 10 , 10);
gameover.addImage(gameoverimg);
gameover.visible = false;
PlayerHeart = createSprite(displayWidth/2 - 400 ,100 , 10 ,10);
PlayerHeart.addImage(PlayerHeartImg);
PlayerHeart.scale = 0.3;
PlayerHeart2 = createSprite(displayWidth/2 - 300 ,100 , 10 ,10);
PlayerHeart2.addImage(PlayerHeartImg);
PlayerHeart2.scale = 0.3;
PlayerHeart3 = createSprite(displayWidth/2 - 200 ,100 , 10 ,10);
PlayerHeart3.addImage(PlayerHeartImg);
PlayerHeart3.scale = 0.3;
BlueHeart = createSprite(displayWidth/2 + 400 , 100 ,10 ,10);
BlueHeart.addImage(BlueHeartImg);
BlueHeart.scale=0.3;
BlueHeart2 = createSprite(displayWidth/2 + 300 , 100 ,10 ,10);
BlueHeart2.addImage(BlueHeartImg);
BlueHeart2.scale=0.3;
BlueHeart3 = createSprite(displayWidth/2 + 500 , 100 ,10 ,10);
BlueHeart3.addImage(BlueHeartImg);
BlueHeart3.scale=0.3;
FireHeart = createSprite(displayWidth/2 + 400 , 100 ,10, 10);
FireHeart.addImage(FireHeartImg);
FireHeart.scale=0.7;
FireHeart.visible = false;
FireHeart2 = createSprite(displayWidth/2 + 300 , 100 ,10, 10);
FireHeart2.addImage(FireHeartImg);
FireHeart2.scale=0.7;
FireHeart2.visible = false;
FireHeart3 = createSprite(displayWidth/2 + 500 , 100 ,10, 10);
FireHeart3.addImage(FireHeartImg);
FireHeart3.scale=0.7;
FireHeart3.visible = false;
mark = createSprite(200 , 178 , 10,10);
mark.shapeColor="red";
arrow = createSprite(670 , 404 , 10 ,10);
arrow.addImage(arrowimg);
arrow.visible = false;
invisground = createSprite(displayWidth/2,displayHeight-150,displayWidth,10);
invisground.visible = false;
instructions = createSprite(displayWidth/2 - 200 , displayHeight/2 - 150 , 10,10);
instructions.addImage(instructionsimg);
instructions.scale = 0.8;
leftButton = createButton("Left");
leftButton.position(100 , displayHeight - 200);
leftButton.mousePressed(()=>{
    Player.velocityX =  -10;
    Player2.velocityX = -10;

});
rightButton = createButton("Right");
rightButton.position(200 , displayHeight - 200);
rightButton.mousePressed(()=>{
Player.velocityX = 10; 
Player2.velocityX = 10;
})
upButton = createButton("Up");
upButton.position(150 , displayHeight - 150);
upButton.mousePressed(()=>{

    if(Player.y > 642){
        Player.velocityY = -10;
        
    }
    Player.velocityY = Player.velocityY + 0.5;
    
   if(Player2.y > 555){
        Player2.velocityY = -35;
   }
   
}
)
hitboxbutton = createButton("Click here to reveal hitboxes");
hitboxbutton.position(displayWidth/2,displayHeight - 700);
hitboxbutton.mousePressed(()=>{
Enemy1.debug = true;
Player.debug = true;
Enemy2.debug = true;
Player2.debug = true;

})
hitboxbuttonoff = createButton("Click here to hide hitboxes");
hitboxbuttonoff.position(displayWidth/2, displayHeight - 800);
hitboxbuttonoff.mousePressed(()=>{
Enemy1.debug = false;
Player.debug = false;
Enemy2.debug = false;
Player2.debug = false;

})
hitButton = createButton("Attack");
hitButton.position(150 , displayHeight - 250);
hitButton.mousePressed(()=>{
    sword.visible = true;
sword.x = Player.x + 90;
sword.y = Player.y - 30;
playerFireballs();
});
hitButton.mouseReleased(()=>{
    sword.visible = false;
    sword.x = 100
    sword.y = 0
});
leftButton.mouseReleased(()=>{
Player.velocityX = 0;
Player2.velocityX = 0;

})
rightButton.mouseReleased(()=>{
    Player.velocityX = 0;
    Player2.velocityX = 0;
    
    })
nextbutton  =  createButton("Advance");
nextbutton.position = (670,404);
nextbutton.mousePressed(()=>{
    Player2.x = 350;
    Player2.y = 550;
    FireHeart.visible = true;
 FireHeart2.visible = true;
 FireHeart3.visible = true;
gameState = "Desert";

})

 /*   leftButton2 = createButton("Left");
    leftButton2.position(100 , displayHeight - 200);
    leftButton2.mousePressed(()=>{
    Player2.x = Player2.x -10;

});
    leftButton2.hide();
    rightButton2 = createButton("Right");
    rightButton2.position(200 , displayHeight - 200);
    rightButton2.mousePressed(()=>{
    Player2.x = Player2.x + 10; 

});
    rightButton2.hide();
    upButton2 = createButton("Up");
    upButton2.position(150 , displayHeight -250);
    upButton2.mousePressed(()=>{

    if(Player2.y > 642){
        Player2.velocityY = -10;
        
    }
    Player2.velocityY = Player2.velocityY + 0.5;
}
)
upButton2.hide();*/
restart = createSprite(displayWidth/2 , displayHeight/2 + 150 , 10 , 10);
restart.addImage(restartimg);
restart.scale = 0.5
restart.visible = false

taphere = createSprite(displayWidth/2 - 400 , displayHeight/2 - 250 , 10 ,10);
taphere.addImage(taphereImg);
taphere.scale = 0.5
taphere.visible = false;

taphere2 = createSprite(displayWidth/2 + 400 , displayHeight/2 - 250 , 10 ,10);
taphere2.addImage(taphereImg);
taphere2.scale = 0.5
taphere2.visible = false;

taphere3 = createSprite(displayWidth/2  , displayHeight/2 , 10 ,10);
taphere3.addImage(taphereImg);
taphere3.scale = 0.5
taphere3.visible = false;

taphere4 = createSprite(displayWidth/2 + 400 , displayHeight/2 + 250 , 10 ,10);
taphere4.addImage(taphereImg);
taphere4.scale = 0.5
taphere4.visible = false;


puzzle2reset = createSprite(displayWidth/2 , displayHeight/2 + 150 , 10 ,10)
puzzle2reset.addImage(puzzle2resetImg);
puzzle2reset.scale = 0.3;
puzzle2reset.visible = false;
}


function draw(){
 
background(0);
console.log(gameState);


if(gameState === "Forest"){
   // Forestsong.play();
    Player2.visible = false;
    bg2.visible = false;
    Player.visible = true;
    Enemy1.visible = true;
 firebombsgroup.setVisibleEach(false);
   
    Player.collide(invisground);
if(sword.isTouching(Enemy1)){
COUNT = 0;
}
if(COUNT === 0){
    BlueGhostHealth = BlueGhostHealth - 1;
    COUNT = 1;
}


if(Enemy1.isTouching(Player)){
COUNT2 = 0;
}
if(COUNT2 === 0){
    PlayerHealth = PlayerHealth - 1;
    COUNT2 = 1;
}
if(keyWentDown(RIGHT_ARROW)){
    //Player.x=Player.x+5;
    Player.velocityX = 10
}
if(keyWentUp(RIGHT_ARROW)){
    Player.velocityX = 0;
}
if(keyWentDown(LEFT_ARROW)){
   // Player.x = Player.x -5;
   Player.velocityX = -10;
}
if(keyWentUp(LEFT_ARROW)){
    Player.velocityX = 0;
}
if(keyWentDown(UP_ARROW)&& Player.y > 642){

    Player.velocityY = -10;
}
Player.velocityY = Player.velocityY + 0.5;

if(keyWentDown("k")){
    sword.visible = true;
sword.x = Player.x + 90;
sword.y = Player.y - 30;
}
if(keyWentUp("k")){
    sword.visible = false;
sword.x = 100;
sword.y = 0;
}
if(PlayerHealth === 30){
    PlayerHeart.visible = true;
    PlayerHeart2.visible = true;
    PlayerHeart3.visible = true;
}
if(PlayerHealth === 20){
    PlayerHeart3.visible = false;

}
if(PlayerHealth === 10){
    PlayerHeart2.visible = false;
}
if(PlayerHealth === 0){
    PlayerHeart.visible = false;
    gameState = "Gameover";
}
if(BlueGhostHealth === 30){
    BlueHeart.visible = true;
    BlueHeart2.visible = true;
    BlueHeart3.visible = true;
}
if(BlueGhostHealth === 20){
    BlueHeart3.visible = false;

}
if(BlueGhostHealth === 10){
    BlueHeart2.visible = false;
}

if(BlueGhostHealth === 0){
    BlueHeart.visible = false;
    Enemy1.visible = false;
    gameState = "NextStage";
}
}
if(gameState === "Gameover"){
    restart.visible = true;
Player.visible = false;
Enemy1.visible = false;
bg2.visible = false;
Enemy2.visible = false;
Player2.visible = false;
map.visible = false;
leftButton.hide();
rightButton.hide();
upButton.hide();
BlueHeart.visible = false;
BlueHeart2.visible = false;
BlueHeart3.visible = false;
mark.visible = false;
instructions.visible = false;
gameover.visible = true;
sword.visible = false;
if(mousePressedOver(restart)){
   reset();

}
}
if(gameState === "NextStage"){
    bg.visible = false;
    Player.x = 396;
    Player.y = 396;
    sword.visible = false;
    instructions.visible = false;
    map.visible = false;
    Player2.visible =true;
    Player2.x = 1009
    Player2.y= 350;
  arrow.visible = true;
    mark.visible = false;
    
//leftButton.hide();
//rightButton.hide();
//upButton.hide();

    fill("blue");
   textSize(50);
    text("You have evolved!" , 670,250)
    fill("red");
    textSize(30);
    text("Click the Spacebar to continue" , 650 , 150);

    if(keyDown("space") && gameState === "NextStage"){
       Player2.x = 350;
       Player2.y = 550;
       FireHeart.visible = true;
    FireHeart2.visible = true;
    FireHeart3.visible = true;
        gameState = "Desert"
        
    }
}
if(gameState === "Desert"){
    //bg.changeImage(bgImg2);
   // Player.changeAnimation("Player2Img" , Player2Anim);
sword.visible = false;
    arrow.visible = false;
    mark.visible = true;
    map.visible = true;
    mark.x = 189;
    mark.y = 99; 
    Player.visible = false;
    Player2.visible = true;
Enemy2.y = displayHeight - 200;

        
    //Player.velocityX = 0;
    //Player.velocityY = 0;
    //bg.destroy();
    bg2.visible = true;
   
    Enemy2.visible = true;
 
    Player2.setCollider("rectangle" , 0 , 0 , 100 , 200)
    Enemy2.setCollider("rectangle" , 20 , 0 ,50 ,50)
    
   if(keyWentDown(RIGHT_ARROW)){
        Player2.velocityX = 10;
//console.log(Player2.x);
    }
    if(keyWentDown(LEFT_ARROW)){
        Player2.velocityX = -10;
    }
    if(keyWentUp(LEFT_ARROW)){
        Player2.velocityX = 0;
    }
    
  if(keyWentDown(RIGHT_ARROW)){
      Player2.velocityX = 10;
  }
  if(keyWentUp(RIGHT_ARROW)){
    Player2.velocityX = 0;
}
    
    if(keyWentDown(UP_ARROW)){
        Player2.velocityY = -50;

    }
    if(keyWentUp(UP_ARROW)){
        Player2.velocityY = 0;
    }
    Player2.velocityY = Player2.velocityY + 2
    Player2.collide(invisground);
    if(keyWentDown("k")){
        playerFireballs();
    }
    if(firebombsgroup.isTouching(Enemy2)){
        firehealth = firehealth-5;
        firebombsgroup.destroyEach();
    }
    if( firehealth === 30){
        FireHeart.visible = true;
        FireHeart2.visible = true;
        FireHeart3.visible = true;
    }
    if(firehealth === 20){
        FireHeart3.visible = false;
    }
    if(firehealth === 10){
        FireHeart2.visible = false;
    }
    
    if(firehealth === 0){
        FireHeart.visible = false;
        Enemy1.destroy();
        gameState = "Choice";
    }
    if(World.frameCount % 75  === 0){
enemyFireballs();
    }
    if(firebombsgroup2.isTouching(Player2)){
        PlayerHealth = PlayerHealth - 5;
        firebombsgroup2.destroyEach();

    }
    if(PlayerHealth === 30){
        PlayerHeart.visible = true;
        PlayerHeart2.visible = true;
        PlayerHeart3.visible = true;
    }
    if(PlayerHealth <= 20 ){
       
        PlayerHeart3.visible = false;
    }
    if(PlayerHealth <= 10){
      
        PlayerHeart2.visible = false;

    }
    if(PlayerHealth <= 0){
        PlayerHeart.visible = false;
        gameState = "Gameover";
      bg.visible = true;
      FireHeart.visible = false;
      FireHeart2.visible = false;
      FireHeart3.visible = false;
     sword.visible = true;

    }
}
//Player.collide(invisground);
console.log(PlayerHealth);
//console.log(mouseX);
//console.log(mouseY);
//console.log(Player.y);
 
drawSprites();
if(gameState == "Choice"){
    this.hitboxbutton.hide();
    this.hitboxbuttonoff.hide();
    firebombsgroup.destroyEach();
    firebombsgroup2.destroyEach();
    Player.destroy();
    Enemy1.destroy();
    mark.x = 132
    mark.y  = 165
    Player2.destroy();
    Enemy2.destroy();
bgfork.visible = true;
PlayerHeart.visible = false;
PlayerHeart2.visible = false;
PlayerHeart3.visible = false;

BlueHeart.visible = false; 
BlueHeart2.visible = false;
BlueHeart3.visible = false;
uparrow.visible = true;
dgarrow.visible = true;
if(mousePressedOver(uparrow)){
    gameState = "Puzzle1"
}


}
/*if(gameState === "Gameover"){
    restart.visible = true;
Player.destroy();
Enemy1.destroy();
bg.destroy();
bg2.destroy();
Enemy2.destroy();
Player2.destroy();
map.destroy();
leftButton.hide();
rightButton.hide();
upButton.hide();
BlueHeart.destroy();
BlueHeart2.destroy();
BlueHeart3.destroy();
mark.destroy();
instructions.visible = false;
gameover.visible = true;
sword.destroy();

}*/
if(gameState === "Puzzle1"){
    map.visible = false;
    mark.visible = false;
    bgfork.visible = false;
    uparrow.visible = false;
    dgarrow.visible = false;
    bg2.visible = false;
    taphere.visible = true;

    if(mousePressedOver(taphere)&& gameState == "Puzzle1"){
taphere2.visible = true;
taphere.destroy();
    }
    if(mousePressedOver(taphere2)&& gameState == "Puzzle1"){
        taphere4.visible = true;
        taphere2.destroy();
    }
    if(mousePressedOver(taphere4) && gameState == "Puzzle1"){
        taphere3.visible = true;
        taphere4.destroy();
    }
    if(mousePressedOver(taphere3) && gameState == "Puzzle1"){
        gameState = "Win1";
        taphere3.destroy();
    }

}
if(gameState === "Win1"){
    fill("blue");
    textSize(30)
    text("You have completed the game! , Tap below to try the other puzzle!" ,displayWidth/2 - 500 , displayHeight/2 )
    puzzle2reset.visible = true;

    if(mousePressedOver(puzzle2reset)){
        gameState = "Choice";
        puzzle2reset.visible = false;
        uparrow.visible = false;
    }
}

}
function playerFireballs(){
    firebombs = createSprite(Player2.x + 20 , Player2.y + 30 , 10 ,10);
    firebombs.addImage(firebombsimg);
    firebombs.scale = 0.3;
    firebombs.velocityX = 10;

    
 firebombsgroup.add(firebombs);

    
    
}
function enemyFireballs(){
    firebombs2 = createSprite(Enemy2.x + 20 , Enemy2.y + 50 , 10 , 10);
    firebombs2.addImage(firebombs2img);
    firebombs2.scale = 0.3;
    firebombs2.velocityX = -10;


    firebombsgroup2.add(firebombs2)
}
function reset(){
gameState = "Forest";

Player.visible = true;
Player.x = 50;
Player.y = 200;
Enemy1.visible = true;
gameover.visible = false;
restart.visible = false;
PlayerHealth = 30;
BlueGhostHealth = 30;
bg.visible = true;
bg2.visible = true;
leftButton.show();
rightButton.show();
upButton.show();
COUNT = 1;
COUNT2 = 1;
BlueHeart.visible = true;
BlueHeart2.visible = true;
BlueHeart3.visible = true;
mark.visible = true;
instructions.visible = true;
map.visible = true;
}