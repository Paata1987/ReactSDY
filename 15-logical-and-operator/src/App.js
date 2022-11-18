import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Button from "./Components/Button";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const resetCount = () => {
    setCount(0);
  };

  const buttonStyle = { backgroundColor: "orange" };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <div>
        <button
          style={buttonStyle}
          onClick={resetCount}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
