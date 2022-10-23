import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./counter.actions";

const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapState = (state) => {
  return {
    counter: state,
  };
};

const mapDispatch = {
  increment,
  decrement,
  reset,
};

const connector = connect(mapState, mapDispatch);

export default connector(Counter);
