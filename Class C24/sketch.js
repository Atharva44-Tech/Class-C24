const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world,obj1;
var rect2;

var ground1;



function setup() {
  createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;

 

  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);  
  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  box5=new Box(810,160,70,70);
  pig1=new Pig(810,350);
  pig2=new Pig(810,220);
  log=new Log(810,260,300,PI/2);
  log2=new Log(810,180,300,PI/2);
  log3=new Log(760,120,150,PI/7);
  log4=new Log(870,120,150,-PI/7);
ground1=new ground(600,395,1200,10);
bird=new Bird(50,600);
}

function draw() {
  background("lightBlue"); 
  Engine.update(engine); 
 
 box1.display(); 
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 ground1.display();
pig1.display();
pig2.display();
log.display();
log2.display();
log3.display();
log4.display();
bird.display();
}