import React, { useCallback } from "react";

const CounterController = React.memo(function CounterController({ setCount, count }) {
  console.log("rendered CounterController");

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [setCount, count]);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [setCount, count]);

  return (
    <div style={{ display: "flex", gap: "10px", fontSize: "25px" }}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
});

export default CounterController;
