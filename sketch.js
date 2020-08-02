const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const heightSegment = window.innerHeight/10;

const background = new Background();
const bird = new Bird();
const pipe1 = new Pipe(window.innerHeight/10 * 9 - heightSegment*1.5, window.innerHeight/10 * 2 + heightSegment*1.5);
const pipe2 = new Pipe(window.innerHeight/10 * 9 - heightSegment*1.5, window.innerHeight/10 * 2 + heightSegment*1.5, window.innerWidth/3);
const pipe3 = new Pipe(window.innerHeight/10 * 9 - heightSegment*1.5, window.innerHeight/10 * 2 + heightSegment*1.5, window.innerWidth* (2/3));
const pipe4 = new Pipe(window.innerHeight/10 * 9 - heightSegment*1.5, window.innerHeight/10 * 2 + heightSegment*1.5, window.innerWidth);
const pipeArray = [pipe1, pipe2, pipe3];

document.addEventListener('resize', (val) => {
  bird.accelleration = .5/315 * window.innerHeight;
  bird.flapStrength = -8/315 * window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

document.addEventListener("keydown", (keycode) => {
  if(keycode.code == 'Space' && bird.alive){
    bird.flap();
  }
});

const draw = () => {
  if(bird.alive){
    background.scroll();
  }
  background.show();

  pipeArray.forEach((item) => {
    if (bird.alive){
      item.update();
    }
    item.show();
    if(item.xLocation <= -100){
      item.reset();
    }
    if(bird.alive){
      bird.alive = item.checkCollission(bird);
    }
  });

  bird.update();
  bird.show();
}

const interval = setInterval(draw, 17);

ctx.scale(window.innerWidth/500, window.innerHeight/500);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
