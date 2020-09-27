const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,500,80,80);
    box2 = new Box(1100,500,80,80);
    ground = new Ground(750,590,1500,20);
    pig1 = new pig(1000,550);
    log1 = new log(1000,450,280,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   
    ground.display();
    
    pig1.display();
    log1.display();
}