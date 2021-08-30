import React from "react";

function Remove({ items, input, setInput }) {
  var data = input[input.length - 1][0];

  function handleRemove(toDoIndex) {
    var prevData = input[input.length - 1][0];

    var newArrElement = prevData.filter((id) => id !== toDoIndex);
    var undo = input.length - 1;
    var redo = null;
    var newArr = [newArrElement, undo, redo];
    var Arr = [...input, newArr];
    setInput(Arr);
  }

  return (
    <div>
      <ul>
        {data.map((d) => (
          <div key={d}>
            <li>
              <span className="Unro">
                {items[d]}
                <button className="del" onClick={(e) => handleRemove(d)}>
                  Remove
                </button>
              </span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Remove;
