import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Button from "./Components/Button";

const text = ["click me", "push it", "press me", "tab me", "shoot "];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="App">
      <Counter count={count} />
      {text.map((varText) => {
        return (
          <Button
            onClick={incrementCount}
            text={varText}
          />
        );
      })}
    </div>
  );
}

export default App;
