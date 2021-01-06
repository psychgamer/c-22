const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,obj1;

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;

  var options = {
    isStatic:true
  }

 obj1 = Bodies.rectangle(5,395,800,10,options);
 World.add(world , obj1);

console.log(obj1); 

}

function draw() {
  Engine.update(engine);
  background(155,55,125);  
  rect (obj1.position.x,obj1.position.y,800,10);
}