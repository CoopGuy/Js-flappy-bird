const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const heightSegment = window.innerHeight/10;

const background = new Background();
const bird = new Bird();
const pipe = new Pipe(window.innerHeight/10 * 9, window.innerHeight/10 * 2);


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

  pipe.update();
  pipe.show();

}

const interval = setInterval(draw, 17);

ctx.scale(window.innerWidth/500, window.innerHeight/500);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
