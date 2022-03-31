function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  clearBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', createBoxes);
refs.clearBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(refs.input.value);
  const allDivsElements = [];
  const step = 10;
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.background = getRandomHexColor();
    size += step;
    allDivsElements.push(element);
  }
  return refs.boxes.append(...allDivsElements);
};

function destroyBoxes() {
  refs.boxes.innerHTML = '';
};