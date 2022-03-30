const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.input.addEventListener('input',onInputChange);

function onInputChange(event) {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;
};

const startInputFontSize = refs.input.value;
refs.text.style.fontSize = `${startInputFontSize}px`;