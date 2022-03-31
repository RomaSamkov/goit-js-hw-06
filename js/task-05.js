const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onChangeInput);

function onChangeInput(event) {
    const inputName = event.currentTarget.value;
    refs.output.textContent = inputName !== '' ? inputName : 'Anonymous';
};