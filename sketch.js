
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var planes_options={
		isStatic : true
    }

	Engine.run(engine);


	var b1 = {
		restitution: 0.5,
		friction: 0.02,
	}
	var b2 = {
		restitution: 0.7,
		friction: 0.01,
		frictionair:0.1,
	}
	var b3 = {
		restitution: 0.01,
		friction: 1,
		frictionair:0.3,
	}
  
   ground = Bodies.rectangle(windowWidth/2,windowHeight,windowWidth,50,planes_options)
   World.add(world,ground)
   
   block1 = Bodies.circle(windowWidth/2,windowHeight/2,windowWidth/15 + windowHeight/15,b1);
   World.add(world,block1)

   block2 = Bodies.rectangle(windowWidth/3,windowHeight/2,windowWidth/15 + windowHeight/15-25,windowWidth/15 + windowHeight/15+50,b2);
   World.add(world,block2)

   block3 = Bodies.rectangle(windowWidth/1.5,windowHeight/2,windowWidth/15 + windowHeight/15,windowWidth/15 + windowHeight/15,b3);
   World.add(world,block3)
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  drawSprites();
 Engine.update(engine)
fill(255,105,180)
 
rect(ground.position.x,ground.position.y,windowWidth,50)
ellipse(block1.position.x,block1.position.y,windowWidth/15 + windowHeight/15)
rect(block2.position.x,block2.position.y,windowWidth/15 + windowHeight/15-25,windowWidth/15 + windowHeight/15+50)
rect(block3.position.x,block3.position.y,windowWidth/15 + windowHeight/15,windowWidth/15 + windowHeight/15)

}



