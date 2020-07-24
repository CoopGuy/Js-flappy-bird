class Bird {
  constructor() {
    this.xLocation = 70;
    this.yLocation = 0;
    this.velocity = 0;
    this.orientation = 90;
    this.accelleration = .5/315 * window.innerHeight;
    this.flapStrength = -8/315 * window.innerHeight;
    // this.img = new Image();
    // this.img.src = 'bird.png';
  }

  show(){
    ctx.fillRect(this.xLocation - 5, this.yLocation - 5, 10, 10);
  }

  update(){
    if(this.yLocation > canvas.height){
      this.velocity = this.velocity * -1;
    }
    else{
      this.velocity += this.accelleration;
    }
      this.yLocation += this.velocity;
  }

  flap(){
    this.velocity = this.flapStrength;
  }
}
