const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴ0123456789';
const fontSize = 16;
let columns = Math.floor(width / fontSize);
const drops = new Array(columns).fill(1);

const draw = () => {
  ctx.fillStyle = 'rgba(3, 10, 7, 0.08)';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#7cff63';
  ctx.font = `${fontSize}px 'Space Mono', monospace`;

  for (let i = 0; i < drops.length; i += 1) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
    drops[i] += 1;
  }
};

let animationFrame = null;
const animate = () => {
  draw();
  animationFrame = requestAnimationFrame(animate);
};
animate();

const onResize = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  columns = Math.floor(width / fontSize);
  drops.length = 0;
  for (let i = 0; i < columns; i += 1) drops[i] = 1;
};

window.addEventListener('resize', onResize);

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(animationFrame);
  } else {
    animate();
  }
});
