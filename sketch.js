var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3,box4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	box4=createSprite(400,635,200,20);
	box4.shapeColor=color(0,0,0);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	box1=createSprite(400,655,200,20);
	box1.shapeColor=color(255,0,0);

	box2=createSprite(300,615,20,100);
	box2.shapeColor=color(255,0,0);

	box3=createSprite(500,615,20,100);
	box3.shapeColor=color(255,0,0);
	 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	var packageBody_options ={
		isStatic: true,
		restitution:0
	}
	
	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBody_options);
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1 = Bodies.rectangle(400,655,200,20, {isStatic:true} );
	World.add(world, box1);

	box2 = Bodies.rectangle(300,615,20,100, {isStatic:true} );
	World.add(world, box2);

	box3 = Bodies.rectangle(500,615,20,100, {isStatic:true} );
	World.add(world, box3);

	box4 = Bodies.rectangle(400,635,200,20, {isStatic:true} );
	World.add(world, box4);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}


function keyPressed() {

 if (keyCode=== DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
}

}



