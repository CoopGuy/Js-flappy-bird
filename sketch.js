const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const background = new Background();
const bird = new Bird();

document.addEventListener('resize', (val) => {
  bird.accelleration = .5/315 * window.innerHeight;
  bird.flapStrength = -8/315 * window.innerHeight;
});

document.addEventListener("keydown", (keycode) => {
  if(keycode.code == 'Space'){
    bird.flap();
  }
});

const draw = () => {
  background.scroll();
  background.show();

  bird.update();
  bird.show();
}

const interval = setInterval(draw, 17);

ctx.scale(window.innerWidth/500, window.innerHeight/500);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
