import React, { useContext } from "react";
import ChildCompD from "./ChildCompD";
import { CounterContext } from "./UseReducerContextParent";

function ChildCompA() {
  const counterContext = useContext(CounterContext);

  return (
    <div>
      <div>
        ChildCompA - {counterContext.count}
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
      <div>
        <ChildCompD />
      </div>
    </div>
  );
}

export default ChildCompA;
