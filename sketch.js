const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint

var engine,world;
var polygon;

function setup() {
  createCanvas(1200,600);
  engine= Engine.create();
  world= engine.world;

  //first pyramid
  box1= new Block(420,399,"cyan");
  box2= new Block(450,399,"cyan");
  box3= new Block(480,399,"cyan");
  box4= new Block(510,399,"cyan");
  box5= new Block(540,399,"cyan")

  box6= new Block(430,369,"pink");
  box7= new Block(460,369,"pink");
  box8= new Block(490,369,"pink");
  box9= new Block(520,369,"pink");

  box10= new Block(445,339,"tomato");
  box11= new Block(475,339,"tomato");
  box12= new Block(505,339,"tomato");

  box13= new Block(470,309,"olive"); 
  box14= new Block(485,309,"olive");

  box15= new Block(480,279,"purple");

  //second 
  box16= new Block(830,299,"purple");
  box17= new Block(860,299,"purple");
  box18= new Block(890,299,"purple");
  box19= new Block(920,299,"purple");
  
  box20= new Block(845,269,"olive");
  box21= new Block(875,269,"olive");
  box22= new Block(905,269,"olive");

  box23=new Block(855,239,"tomato");
  box24=new Block(885,239,"tomato");

  box25= new Block(870,209,"pink");

  polygon= Bodies.polygon(200,300,6,10);
  polygon.shapeColor="red";
  World.add(world,polygon)

  
 
  mainGround= new Ground(600,590,width,"chocolate")
  ground= new Ground(480,400,300,"white");
  ground2= new Ground(875,300,230,"white")
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display(); 

  
  
  mainGround.display();
  ground.display(); 
  ground2.display();
  drawSprites();
}