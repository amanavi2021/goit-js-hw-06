const input = document.querySelector('#font-size-control');
const label = document.querySelector('#text');

input.addEventListener('input', onSizeInput);

function onSizeInput(event) {
    const newFontSize = event.currentTarget.value;
    label.style.fontSize = `${newFontSize}px`;
}