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

const createStore = (reducer) => {
  let state;
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  // Initialize the state
  dispatch({ type: "@@INIT" });

  return { getState, dispatch, subscribe };
};

const store = createStore(reducer);

// Subscribe to store changes
store.subscribe(() => {
  console.log("State:", store.getState());
});

// Log the initial state
console.log("Initial State:", store.getState());

// Dispatch ADD actions to set state to count: 2
store.dispatch(add()); // State: { count: 1 }
store.dispatch(add()); // State: { count: 2 }

// Dispatch SUBTRACT action
store.dispatch(subtract()); // State: { count: 1 }

// Dispatch RESET action
store.dispatch(reset()); // State: { count: 0 }
