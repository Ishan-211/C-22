//Declaring Alias name for Module
const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;

//Declare the game Elemnts
var world,engine,box,ground;

function setup() {
  createCanvas(800,400);
  // creating game Engine by using Engine module
engine= Engine.create();
// game world is equal to engine's world
world=engine.world;
// creating body model for game
ground=Bodies.rectangle(0,380,800,20,{isStatic:true});
// add body model and game world to world module
World.add(world,ground);
box=Bodies.rectangle(200,200,80,20);
World.add(world,box);

}

function draw() {
  background(0); 
  Engine.update(engine) 
 rect(ground.position.x,ground.position.y,800,20);
 rect(box.position.x,box.position.y,80,20);
}