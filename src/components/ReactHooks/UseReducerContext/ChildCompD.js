import React, { useContext } from "react";
import { CounterContext } from "./UseReducerContextParent";

function ChildCompD() {
  const counterContext = useContext(CounterContext);

  return (
    <div>
      <div>ChildCompD - {counterContext.count}</div>;
      <div>
        <button
          onClick={() => {
            counterContext.countDispatch("Increment");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            counterContext.countDispatch("Decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            counterContext.countDispatch("Reset");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ChildCompD;
