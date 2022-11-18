import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Button from "./Components/Button";

const text = ["click me", "push me", "press me", "tab me"];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="App">
      <Counter count={count} />
      <Button
        onClick={incrementCount}
        text={text[0]}
      />
      <Button
        onClick={incrementCount}
        text={text[1]}
      />
      <Button
        onClick={incrementCount}
        text={text[2]}
      />
      <Button
        onClick={incrementCount}
        text={text[3]}
      />
    </div>
  );
}

export default App;
