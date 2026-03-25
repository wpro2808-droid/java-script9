const boxes = document.querySelectorAll('.box');

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

boxes.forEach((box, index) => {
  box.addEventListener('click', () => {

    if (index < 3) {
      const color = getRandomColor();

      box.style.background = color;
      document.body.style.background = color;

    } else {
      const color1 = getRandomColor();
      const color2 = getRandomColor();

      box.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
    }

  });
});