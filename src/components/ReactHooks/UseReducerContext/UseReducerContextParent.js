import React, { useReducer, useContext } from "react";
import ChildCompA from "./ChildCompA";
import ChildCompB from "./ChildCompB";
import ChildCompC from "./ChildCompC";

const count = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return 0;
    default:
      return state;
  }
};

export const CounterContext = React.createContext();

function UseReducerContextParent() {
  const [counter, dispatch] = useReducer(reducer, count);
  return (
    <div>
      <CounterContext.Provider
        value={{ count: counter, countDispatch: dispatch }}
      >
        <div>UseReducerContextParent</div>
        <div>Counter {counter}</div>
        <div>
          <button
            onClick={() => {
              dispatch("Increment");
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch("Decrement");
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              dispatch("Reset");
            }}
          >
            Reset
          </button>
          <div>
            <ChildCompA />
            <ChildCompB />
            <ChildCompC />
          </div>
        </div>
      </CounterContext.Provider>
    </div>
  );
}

export default UseReducerContextParent;
