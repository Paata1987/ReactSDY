import Person from "../Components/Person";
import personsData from "../Data/persons";
function Persons() {
  return (
    <div className="cards">
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
