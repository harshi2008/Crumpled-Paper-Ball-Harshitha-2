const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground1, ground2;
var stick1, stick2, stick3, stick4, stick5, stick6;
var ball1, ball2;

function preload(){

}

function setup(){
	createCanvas(1270, 750);
	
	engine = Engine.create();
	world = engine.world;

    ground1 = new Ground(700, 365, 1500, 20);
	ground2 = new Ground(700, 740, 1500, 20);
	ground3 = new Ground(1265, 230, 15, 1500);
	ground4 = new Ground(515, 4, 1505, 15);
	ground5 = new Ground(5, 230, 15, 1500);
	
	dustbin1 = new Dustbin(1000, 255, 150, 200);
//	dustbin2 = new Dustbin(1000, 630, 150, 200);

	ball1 = new Paperball(400, 290, 90);
//	ball2 = new Paperball(400, 670, 90);

var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1600,
	  height: 700,
	  wireframes: false
	}
  });

  Render.run(render);
}

function draw(){
	background("lightblue");

	Engine.update(engine);

	fill("maroon");
	textSize(20);
	text("Use all the 4 arrow keys to move the balls", 470, 50);

	//to display the grounds
	ground1.display();
	ground2.display();
	ground3.display();
	ground4.display();
	ground5.display();

	//to display the dustbins
	dustbin1.display();
//	dustbin2.display();

	//to display the paperballs
	ball1.display();
//	ball2.display();
}

function keyPressed(){

	//up arrow 
	if(keyCode===38){
	Matter.Body.applyForce(ball1.body, ball1.body.position, {x:150, y:-105})
	//Matter.Body.applyForce(ball2.body, ball2.body.position, {x:150, y:-75})
	}

	//left arrow 
	//if(keyCode===37){
//	Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-105, y:-65})
	//Matter.Body.applyForce(ball2.body, ball2.body.position, {x:-75, y:-65})
//	}

	//right arrow
//	if(keyCode===39){
//	Matter.Body.applyForce(ball1.body, ball1.body.position, {x:105, y:-65})
//	Matter.Body.applyForce(ball2.body, ball2.body.position, {x:75, y:-65})
//	}

	//down arrow
	//if(keyCode===40){
	//Matter.Body.applyForce(ball1.body, ball1.body.position, {x:105, y:105})
//	Matter.Body.applyForce(ball2.body, ball2.body.position, {x:75, y:105})
	//}
}













