import "./App.css";
import Info from "./components/info";

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>App Component Heading</h1>
        <h2> info component works!</h2>
        <button className="my-button">Button app component app</button>
      </div>
    </div>
  );
}

export default App;
