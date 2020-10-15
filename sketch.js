var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(750,250);

  speed = random(223,321);
  thickness = random(22,83);
  weight = random(30,52);

  bullet = createSprite(50,125,15,15);
  bullet.shapeColor = "white";

  wall = createSprite(650,125,thickness,250);
  wall.shapeColor = "white";

}

function draw() {
  background(0);

  if(keyDown("space")){
    bullet.velocityX = speed;
  }
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
  }
  drawSprites();
}