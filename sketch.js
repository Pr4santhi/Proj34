const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,superHero;
var engine,world;

function preload(){
bg = loadImage("GamingBackgroung.png");


}
function setup() {
  createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;

    superHero = new Hero(400,800,250);

}

function draw() {
  background(bg);
  Engine.update(engine);

  superHero.display();

}

