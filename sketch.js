const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const background = new Background();
const bird = new Bird();

document.addEventListener("keydown", (keycode) => {
  if(keycode.code == 'Space'){
    bird.flap();
  }
});

const draw = () => {
  ctx.rect(0,0,canvas.width,canvas.height);
  ctx.fill();

  background.scroll();
  background.show();

  bird.update();
  bird.show();
}

const interval = setInterval(draw, 17);



canvas.width = 500;
canvas.height = 500;
