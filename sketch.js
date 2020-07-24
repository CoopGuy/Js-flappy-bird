const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const background = new Background();
const bird = new Bird();

const draw = () => {
  background.scroll();
  background.show();
}

const interval = setInterval(draw, 17);



canvas.width = 500;
canvas.height = 500;
