const ref = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

ref.input.addEventListener('input', onChangeInput);

function onChangeInput(event) {
    const inputName = event.currentTarget.value;
    ref.output.textContent = inputName !== '' ? inputName : 'Anonymous';
};