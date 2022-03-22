//player sprite and player picture
var player;
var playerpicture;

//image that will be displayed once the player has died
var endscreenima;
var endscreensprite;

//invisible walls on the left and right of the screen to keep the player in bounds
var wall1, wall2;

//lamplight's light that the player will have to stay within 
var lightblocks;
var lightblocksima;

//lamplight image and the sprite it will be added onto
var lamplightima;
var lamplightsprite;

//gamestates
var BEGIN;
var PLAY;
var END;
var gameState;


function preload(){

//loading the player image of the girl in pigtails
playerpicture = loadImage("playerimage.png");

//loading the endscreen image
endscreenima = loadImage("endscreen.png");

//loading the lamp's image
lamplightima = loadImage("light.png");

//loading the lamp's light that gets spawned at random 
lightblocksima = loadImage("lightemmited at random.png");

}

function setup(){
  createCanvas(500, 500);

  //creating player and adding the player image to the player sprite
  player = createSprite(250,465, 50, 50);
  player.addImage("img", playerpicture);
  //playerpicture.height = 200;
  //playerpicture.width = 200;

  //creating borders to keep the player in bounds
  wall1 = createSprite(510, 400, 10, 1000);
  wall2 = createSprite(-10, 400, 10, 1000);

  //making of the lamplight's sprite and the actual lightblocks
  lamplightsprite = createSprite(250, 45, 10,10);
  lamplightsprite.addImage("lol", lamplightima);

  lightblocks = createSprite(255,100,10,10);
  lightblocks.addImage("lmao", lightblocksima);
  lightblocksima.height = 90
  lightblocksima.width = 90

}

function draw() {

//background (250,200,200);
//background(endscreenima);

background(100,100,100);

createEdgeSprites();
//player.bounce(wall1);
//player.bounce(wall2);

//making sure that the player sprite doesn't go through the borders I've created
player.bounceOff(wall1);
player.bounceOff(wall2);  

//moving the player from side to side with the arrow keys
if(keyDown(RIGHT)){
  player.velocity.x = 5
} else if(keyDown(LEFT)){
  player.velocity.x = -5
} else {
  player.velocity.x = 0
}
  

  //draw the sprites
  drawSprites();
}