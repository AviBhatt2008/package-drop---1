// define variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
// namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	// load images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	// create canvas
	createCanvas(800, 700);
	// rectmode centre
	rectMode(CENTER);

	// create engine and add to world
	engine = Engine.create();
	world = engine.world;

	// create package body and add to world
	packageBody = Bodies.circle(width/2 , 150 , 5 , {restitution:0.65, isStatic:true});
	World.add(world, packageBody);

	// make sprite with same properties
	packageSprite=createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	// create ground body and add to world
	ground = Bodies.rectangle(width/2, 685, width, 10 , {isStatic:true} );
	World.add(world, ground);
	  
	// make sprite with same properties
	groundSprite=createSprite(ground.position.x, ground.position.y, width,30);
	groundSprite.shapeColor=color(50)

	// create helicopter
	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.depth = packageSprite.depth-1;

	// run engine
	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  // black background
  background(0);
  // constantly update package positions
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  // to make package drop
  keyPressed();
  // draw sprites
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// make package not static
	Body.setStatic(packageBody, false);
  }
}



