import { useState, useReducer } from "react";
import "./styles.css";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <div>
      <button onClick={increment}>increment</button>
      <span>{state.count}</span>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
