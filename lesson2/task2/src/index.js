import "./index.scss";
import store, { increment, decrement, reset } from "./store.js";

const resultEl = document.querySelector(".counter__result");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener("click", onIncrement);
decrementBtn.addEventListener("click", onDecrement);
resetBtn.addEventListener("click", onReset);

store.subscribe(() => {
  const state = store.getState();
  const value = state.history.reduce((acc, value) => +acc + +value, 0);
  const history = state.history.join("");
  const result = `${history} = ${value}`;

  resultEl.textContent =
    state.history.length === 0 ? "" : `${history} = ${value}`;
});
