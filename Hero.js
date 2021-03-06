class Hero {
    constructor(x,y,r){
      var options = {
        'frictionAir':0.0005,
        'density':1.0
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("images/Superhero-01.png");
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    fill(255,0,255);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
  }
  }