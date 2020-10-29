const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;
var ball2;

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  

  

  var abc={
    isStatic:true
  }
  
  ground=Bodies.rectangle(200,390,500,20,abc);
  World.add(world,ground);
  
  var ball_abc={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_abc);
  World.add(world,ball);

var ballproperties={
  restitution:1.0
}
ball2=Bodies.circle(100,100,20,ballproperties);
World.add(world,ball2);
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,20,20);

}
