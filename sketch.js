
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;

var roof1, ropeser ,rope4,rope5,rope6  ;

function preload(){
	
}

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bobDiameter=40;

startBobPositionX=width/2;
startBobPositionY=height/4+500;

bob1= new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
bob2= new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter)
bob3= new bob( startBobPositionX,startBobPositionY,bobDiameter)
bob4= new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter)
bob5= new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)

roof1= new Roof(550,100);
// here i have to do
ropeser= new rope(bob1.body,roof1.body,-bobDiameter*2,0);

rope1= new rope(bob2.body,roof1.body,-bobDiameter,0);

rope4= new rope(bob3.body,roof1.body,0,0)

rope5=new rope(bob4.body,roof1.body,bobDiameter,0);

rope6=new rope(bob5.body,roof1.body,bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(206);
  



bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof1.display();
 ropeser.display();
rope1.display();
rope4.display();
rope5.display();
rope6.display();
  drawSprites();
 
}



