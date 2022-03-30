let counterValue = 0;
const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    counter: document.querySelector('#value'),
};

const increment = () => refs.counter.textContent = counterValue += 1;
const decrement = () => refs.counter.textContent = counterValue -= 1;

refs.incrementBtn.addEventListener('click', increment);
refs.decrementBtn.addEventListener('click', decrement);