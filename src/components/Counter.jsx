import React from "react";

const Counter = React.memo(function Counter({ debounceValue }) {
  console.log("rendered counter");
  return <div>{debounceValue}</div>;
});

export default Counter;
