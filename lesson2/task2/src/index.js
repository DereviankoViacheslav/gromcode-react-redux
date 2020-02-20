import store, { increment, decrement, reset } from './store';
import './index.scss';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

function onIncrement() {
  store.dispatch(increment());
}

function onDecrement() {
  store.dispatch(decrement());
}

function onReset() {
  store.dispatch(reset());
}

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, value) => +value + acc, 0);
  const historyString = state.history.join('');
  resultElem.textContent = state.history.length !== 0
    ? `${historyString} = ${currentValue}`
    : '';
});