const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowflakes = []
var maxsnowflakes = 100

function preload(){
  backgroundIMG = loadImage("bg.jpg");
  boyIMG = loadImage("boy.png")
  girlIMG = loadImage("girl.png")
}
function setup() {
  createCanvas(1200,600);
 engine = Engine.create();
 world = engine.world;

 
  boy = createSprite(400,350)
  boy.addImage(boyIMG)
  boy.scale=0.4

  girl = createSprite(600,500);
  girl.addImage(girlIMG);

  if(frameCount % 150 === 0){
    for(var i=0; i<maxsnowflakes; i++){
    snowflakes.push(new snowflake(random(0,1200), random(0,1200)));
    }
  }  
  
  
}

function draw() {
  background(backgroundIMG);  
  Engine.update(engine);
  for(var i = 0; i<maxsnowflakes; i++){
    snowflakes[i].display();
    snowflakes[i].updateY()
    }
    
  drawSprites();

}