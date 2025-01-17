import data from "./data";
import { useState } from "react";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClearList = () => {
    setPeople([])
  }
  return (
    <main>
      <section className="container">
        <List people={people} setPeople={setPeople} />
        <button
          type="button"
          className="btn btn-block"
          onClick={handleClearList}
        >
          Clear List
        </button>
      </section>
    </main>
  );
};
export default App;
