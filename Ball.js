class Ball {
    constructor(x, y, radius) {
      var options = {
        'isStatic':false,
        'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      
     this.radius=radius;
     // World.add(world)
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
      
     
      strokeWeight(4);
      
      fill("red");
    circle(0,0,this.radius)
      pop();
    }
  };
  function keypressed(){
	if(keyCode===UP_ARROW){
	
		Matter.Body.applyForce(this.body,(this.body.x,this.body.y),{x:85,y:-85});
   
	}
}



