import { createStore } from "redux";

// Action generators/creators are functions that return action objects

const increment = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});


// Reducers

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "RESET":
      return {
        count: (state.count = 0)
      };
    default:
      return state;
  }
  console.log("running");
  return state;
});


const store = createStore(countReducer);


// return value from subscribe is a value we can call to unsubscribe.
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(increment({ incrementBy: 5 }));

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});
