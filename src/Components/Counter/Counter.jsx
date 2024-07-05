import React from "react";
import { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  let timer;

  //   const handleIncrement = () => {
  //     setCount(count + 1);
  //   };

  //   const handleDecrement = () => {
  //     setCount(count - 1);
  //   };

  //   useEffect(() => {
  //     console.log("App is rendered");
  //   }, []);

  const handleStart = () => {
    timer = setInterval(() => {
      console.log(count);
      setCount(count + 1);
    }, 1000);
  };

  useEffect(() => {
    handleStart();

    // clean up function

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const handleStop = () => {
    setCount(0);
    clearInterval(timer);
  };

  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button> */}
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
