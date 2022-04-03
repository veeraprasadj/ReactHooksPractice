import React, { isValidElement, useMemo, useState } from "react";

function UseMemoComp() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 2);
  };

  // without useMemo, below method gets executed on every re-render of the component
  //   const isEven = () => {
  //     let i = 0;
  //     while (i < 3000000000) i++;
  //     return counterOne % 2 === 0 ? "Even" : "Odd";
  //   };

  // useMemo remember the return value 
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 3000000000) i++;
    return counterOne % 2 === 0 ? "Even" : "Odd";
  }, [counterOne]);

  return (
    <div>
      <div>UseMemoComp</div>
      <div>
        Counter1 - {counterOne} - <span>{isEven}</span>
        <div>
          <button onClick={incrementOne}>IncrementOne</button>
        </div>
        <div>
          Counter2 - {counterTwo}
          <div>
            <button onClick={incrementTwo}>incrementTwo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseMemoComp;
