
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(400,600,800,20)
bin1 =new Bin(500,300,200,10)
bin2 =new Bin(400,300,10,100)
bin3 =new Bin(600,300,10,100)
ball1 =new Ball(200,200,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display()
  bin1.display();
  bin2.display();
  bin3.display();
  ball1.display();
 keypressed();
  drawSprites();
 
}
function keypressed(){
	if(keyDown("up")){
		
		Matter.Body.applyForce(Ball.body,Ball.body.position,{x:85,y:-85});
   
	}
}



