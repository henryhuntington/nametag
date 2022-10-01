// set variables

const nameDisplay = document.getElementById('name-display');
const button = document.getElementById('button');
const nameInput = document.getElementById('name-input');

// set event listeners

button.addEventListener('click', () => {
    const name = nameInput.value;
    nameDisplay.textContent = name;
})