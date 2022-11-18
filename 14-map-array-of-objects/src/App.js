import "./App.css";
import personsData from "./Data/persons";

function App() {
  return (
    <div className="App">
      {personsData.map((person) => {
        return <h1>{person.firstName}</h1>;
      })}
      {/*  {personsData.map((person) => {
        console.log(person.firstName);
        return <h1>{person.firstName}</h1>;
      })} */}
    </div>
  );
}

export default App;
