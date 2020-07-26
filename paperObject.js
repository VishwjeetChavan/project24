class paperObject {
     constructor(x,y) {
         var options = {
             isStatic:false,
             restitution:0.3,
             friction:0.5,
             density:1.2
         }
    this.body = Bodies.circle(x,y,200,options);
    this.radius = 20;
    World.add(world, this.body);
     }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);

      fill("pink");
      circle(0,0,this.radius);
      pop;
    }
};