class Bird {
  constructor() {
    this.xLocation = 70;
    this.yLocation = 0;
    this.velocity = 0;
    this.orientation = 90;
    this.accelleration = .5/315 * window.innerHeight;
    this.flapStrength = -8/315 * window.innerHeight;
    this.alive = true;
    // this.img = new Image();
    // this.img.src = 'bird.png';
  }

  show(){
    ctx.fillRect(this.xLocation - 5, this.yLocation - 5, 10, 10);
  }

  update(){
    if(this.alive){
      if(this.yLocation > canvas.height){
        this.alive = false;
      }
      else{
        this.velocity += this.accelleration;
      }
    }
    else if(this.yLocation < canvas.height){
      this.velocity += this.accelleration;
    }
    else(this.velocity = 0);
    this.yLocation += this.velocity;
  }

  flap(){
    this.velocity = this.flapStrength;
  }
}
