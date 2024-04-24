import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterController from "./components/CounterController";
import { useDebounce } from "./hooks/useDebouce";

const App = () => {
  const [count, setCount] = useState(1);
  const debounceValue = useDebounce(count, 1000);
  return (
    <div className="container">
      <CounterController setCount={setCount} count={count} />
      <Counter debounceValue={debounceValue} />
    </div>
  );
};

export default App;
