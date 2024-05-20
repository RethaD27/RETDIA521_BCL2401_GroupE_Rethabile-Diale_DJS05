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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: state.count + 1 };
    case ADD:
      return { ...state, count: state.count + 1 };
    case SUBTRACT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
