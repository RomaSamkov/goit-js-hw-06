function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
  body: document.body,
};

refs.button.addEventListener('click', onChangeBgColor);

function onChangeBgColor() {
  const randomColor = getRandomHexColor();
  refs.body.style.background = randomColor;
  refs.span.textContent = randomColor;
};