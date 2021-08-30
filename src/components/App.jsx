import React, { useState } from "react";
import Add from "./Add";
import Remove from "./Remove";

function App() {
  const [items, setItems] = useState();
  const [input, setInput] = useState([[[], null, null]]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div>
        <Add
          items={items}
          setItems={setItems}
          input={input}
          setInput={setInput}
        />
      </div>
      <div>
        <Remove items={items} input={input} setInput={setInput} />
      </div>
    </div>
  );
}

export default App;
