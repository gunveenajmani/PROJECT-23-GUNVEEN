var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, wall1, wall2, wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 250, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	//packageSprite.isStatic=false;
	//packageSprite.restitution=0;

	helicopterSprite=createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor=color(255);

	wall1=createSprite(285, height-90, 20, 100);
	wall1.shapeColor="red";
	//wall1.isStatic=true;

	wall2=createSprite(385, height-50, 200, 20);
	wall2.shapeColor="red";
	//wall2.isStatic=true;

	wall3=createSprite(485, height-90, 20, 100);
	wall3.shapeColor="red";
	//wall3.isStatic=true;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 250 , 5 , {restitution:0.8});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	wall1 = Bodies.rectangle(285, height-90, 20, 100, {isStatic:true} );
	World.add(world, wall1);
	 
    wall2 = Bodies.rectangle(385, height-50, 200, 20, {isStatic:true} );
	World.add(world, wall2);
	 
	wall3 = Bodies.rectangle(485, height-90, 20, 100, {isStatic:true} );
 	World.add(world, wall3);

	Engine.run(engine);
  
}

function draw() {
  //rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x; 
  //packageSprite.y= packageBody.position.y;
  keyPressed(); 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.x=packageBody.position.x;
	packageSprite.y=packageBody.position.y;
  }
}