const nameInput = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

nameInput.addEventListener('input', onNameInput);

function onNameInput(event) {
    const currentName = event.currentTarget.value;
    nameLabel.textContent = currentName ===''? 'Anonymous': currentName;
}