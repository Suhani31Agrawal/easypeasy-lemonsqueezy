
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(320,650,20);
	bob2=new Bob(360,650,20);
	bob3=new Bob(400,650,20);
	bob4=new Bob(440,650,20);
	bob5=new Bob(480,650,20);

	roof=new Roof(400,250,250,10);

	rope1=new Bobstring(bob1.body,roof.body,-80,0)
	rope2=new Bobstring(bob2.body,roof.body,-40,0)
	rope3=new Bobstring(bob3.body,roof.body,0,0)
	rope4=new Bobstring(bob4.body,roof.body,40,0)
	rope5=new Bobstring(bob5.body,roof.body,80,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(50);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
  }
  



