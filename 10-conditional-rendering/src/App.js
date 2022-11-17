import "./App.css";
import PetInfo from "./Components/PetInfo";

function App() {
  return (
    <div className="App">
      <PetInfo
        animal="cat"
        age={5}
        hasPet
      />
      <PetInfo
        animal="dog"
        age={6}
        hasPet={false}
      />
    </div>
  );
}

export default App;
