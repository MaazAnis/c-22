const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies
var engine,world,body



function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  var options = {
    isStatic:true
  }
  body = Bodies.rectangle(400,300,50,50,options)
  World.add(world,body)
  console.log(body)
  
  var options2 = {
    restitution:2
  }
  ball = Bodies.circle(400,50,50,options2)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
 rect(body.position.x,body.position.y,50,50)

 ellipse(ball.position.x,ball.position.y,50)
}