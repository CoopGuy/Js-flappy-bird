class Background {
  constructor() {
    this.img = new Image();
    this.img.src = 'background.png';
    this.scrollLength = 0;
  }

  scroll(){
      if(this.scrollLength <= -canvas.width){
        this.scrollLength = 0;
      }
      this.scrollLength -= 2;
  }

  show(){
    ctx.drawImage(this.img, this.scrollLength, 0, canvas.width, canvas.height);
    ctx.drawImage(this.img, this.scrollLength + canvas.width, 0, canvas.width, canvas.height);
  }
}
