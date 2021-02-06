
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  fill("green");
  textSize(18);
  text("KEEP THE CITY NICE OR BE READY TO PAY THE PRICE",200,50);
  fill("red");
  textSize(24);
  text("&",400,95);
  fill("violet");
  textSize(18);
  text("DO NOT LITTER IT MAKES WORLD BITTER",200,150);
  fill("white");
  textSize(22);
  text("DUSTBIN",1200,500)
  fill("orange");
  textSize(22);
  text("WASTE PAPER",200,600)
  fill("pink");
  textSize(18);
  text("PRESS UP ARROW KEY TO THROW WASTE PAPER INTO DUSTBIN",300,300)
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





