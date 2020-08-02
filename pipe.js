class Pipe {
  constructor(max, min, offset) {
    this.min = min;
    this.max = max;
    this.holeHeight = Math.floor(Math.random() * (max - min) + min);
    this.topHeight = this.holeHeight + heightSegment*1.3;
    this.bottomHeight = this.holeHeight - heightSegment*1.3;
    if(offset != undefined){
      this.xLocation = window.innerWidth/10 * 11 + offset;
    }
    else{
      this.xLocation = window.innerWidth/10 * 11;
    }

    this.topimg = new Image();
    this.bottomimg = new Image();
    this.bottomimg.src = 'FlippedPipe.png';
    this.topimg.src = 'Pipe.png';
    this.wi = window.innerWidth/100 * 1.5;
  }

  show(){
    ctx.translate(-189, 0);
    ctx.drawImage(this.topimg, this.xLocation - 5, this.topHeight - 5);
    ctx.translate(0, -506)
    ctx.drawImage(this.bottomimg, this.xLocation - 5, this.bottomHeight - 5);
    ctx.translate(189, 506);
  }

  update(){
    this.xLocation -= 4;
  }

  checkCollission(birdObj){
    if(Math.abs(birdObj.xLocation - this.xLocation) < this.topimg.width*.22){
      if(birdObj.yLocation > this.bottomHeight && birdObj.yLocation < this.topHeight){
        return true;
      }
      else{
        return false;
      }
    }
    return true;
  }

  reset(){
    this.holeHeight = Math.floor(Math.random() * (this.max - this.min) + this.min);
    this.topHeight = this.holeHeight + heightSegment*1.3;
    this.bottomHeight = this.holeHeight - heightSegment*1.3;
    this.xLocation += window.innerWidth;
  }
}
