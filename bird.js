class Bird {
  constructor() {
    this.xLocation = 70;
    this.yLocation = 0;
    this.velocity = 0;
    this.orientation = 90;
    // this.img = new Image();
    // this.img.src = 'bird.png';
  }

  show(){
    ctx.fillRect(this.xLocation - 5, this.yLocation - 5, 10, 10);
  }

  update(){
    this.velocity += .5;
    this.yLocation += this.velocity;
  }

  flap(){
    this.velocity = -8;
  }
}
