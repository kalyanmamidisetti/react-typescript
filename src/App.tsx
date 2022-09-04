import "./App.css";
import { Greet } from "./Components/Greet";
import { Person } from "./Components/Person";
import { PersonList } from "./Components/PersonList";

function App() {
  const personName = {
    first: "Kalyan",
    last: "Kumar",
  };

  const nameList = [
    {
      first: "NAME 1",
      last: "NAME 1 LAST",
    },
    {
      first: "NAME 2",
      last: "NAME 2 LAST",
    },
    {
      first: "NAME 3",
      last: "NAME 3 LAST",
    },
  ];
  return (
    <div className="App">
      <Greet name="Kalyan" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList dataList={nameList} />
    </div>
  );
}

export default App;
