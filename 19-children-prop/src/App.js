import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper color="black">
        <h2>somthing inside wrapper</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="red">
        <h2>Another wrapper</h2>
        <button>some description</button>
        <input
          type="text"
          placeholder="Enter value"
        />
      </Wrapper>
    </div>
  );
}

export default App;
