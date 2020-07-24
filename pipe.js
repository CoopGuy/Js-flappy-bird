class Pipe {
  constructor(max, min) {
    this.holeHeight = Math.floor(Math.random() * (max - min) + min);
    this.topHeight = this.holeHeight + heightSegment*1.3;
    this.bottomHeight = this.holeHeight - heightSegment*1.3;
    this.xLocation = window.innerWidth/10 * 11;
  }

  show(){
    ctx.fillRect(this.xLocation - 5, this.holeHeight - 5, 10, 10);
    ctx.fillStyle = 'rgb(100,0,0)';
    ctx.fillRect(this.xLocation - 5, this.topHeight - 5, 10, 10);
    ctx.fillRect(this.xLocation - 5, this.bottomHeight - 5, 10, 10);
    ctx.fillStyle = 'rgb(0)';
  }

  update(){
    this.xLocation -= 3;
  }
}
