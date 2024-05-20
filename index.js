const initialState = {
  count: 0,
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const reset = () => ({ type: RESET });
const add = () => ({ type: ADD });
const subtract = () => ({ type: SUBTRACT });
