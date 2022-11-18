import Person from "./Person";
import Person from "./Components/Person";
import personsData from "./Data/persons";
function Persons() {
  return (
    <div>
      {personsData.map((personVar) => {
        return (
          <Person
            key={personVar.id}
            {...personVar}
          />
        );
      })}
    </div>
  );
}
export default Persons;
