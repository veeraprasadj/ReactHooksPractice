import React, { useState, useRef, useEffect } from "react";

function UseRefComp() {
  const intervalRef = useRef();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  return (
    <div>
      <div>UseRefComp</div>
      <div>Timer - {timer}</div>
      <div>
        <button
          onClick={() => {
            clearInterval(intervalRef.current);
          }}
        >
          ClearTimer
        </button>
      </div>
    </div>
  );
}

export default UseRefComp;
