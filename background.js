class Background {
  constructor() {
    this.img = new Image();
    this.img.src = 'background.png';
    this.scrollLength = 0;
  }

  scroll(){
      if(this.scrollLength <= -500){
        this.scrollLength = 0;
      }
      this.scrollLength -= 2;
  }

  show(){
    ctx.drawImage(this.img, this.scrollLength, 0);
    ctx.drawImage(this.img, this.scrollLength + 500, 0);
  }
}
