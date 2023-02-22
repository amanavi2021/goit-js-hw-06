function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorLabel = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', onColorChangeClick);

function onColorChangeClick(event) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorLabel.textContent = newColor;
}
