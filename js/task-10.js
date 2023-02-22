function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxesList = document.querySelector('#boxes');
boxesList.style.display = 'flex';

let sizeOfBox = 30;

createBtn.addEventListener('click', onCreateClick);
destroyBtn.addEventListener('click', destroyBoxes);

function onCreateClick() {
  createBoxes(Number(input.value));

}

function createBoxes(amount) {
  let  elements = [];
 for  (let i=1; i<=amount; i+=1) {
  let newBox = onDivCreate(sizeOfBox);
  elements.push(newBox);
  sizeOfBox+=10;
 }

  boxesList.append(...elements);
}

function onDivCreate(size) {
  const divEl = document.createElement('div');
  divEl.style.width = `${size}px`;
  divEl.style.height = `${size}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  return divEl;
}

function destroyBoxes() {
boxesList.innerHTML='';
sizeOfBox = 30;
}