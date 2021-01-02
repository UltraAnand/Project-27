const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Ground(400, 100, 600, 50)
	bob1 = new Bob(200, 450, 100)
	bob2 = new Bob(300, 450, 100)
	bob3 = new Bob(400, 450, 100)
	bob4 = new Bob(500, 450, 100)
	bob5 = new Bob(600, 450, 100)

	rope1 = new Chain(roof, bob1, -200, 0, 0, -50);
	rope2 = new Chain(roof, bob2, -100, 0, 0, -50);
	rope3 = new Chain(roof, bob3, 0, 0, 0, -50);
	rope4 = new Chain(roof, bob4, 100, 0, 0, -50);
	rope5 = new Chain(roof, bob5, 200, 0, 0, -50);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	//drawSprites();
	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}


function keyPressed() {
	//console.log("something is pressed " + key)
	if ((key == "ArrowUp")) {
		//console.log("Key Up Pressed")
		Matter.Body.applyForce(bob1.body, bob1.body.position, {
			x: -50,
			y: -50
		});
	}
}