import React from "react";

function Add({ items, setItems, input, setInput }) {
  var preState = [];

  function handleAdd(event) {
    var val = document.querySelector("#element").value;

    if (items !== undefined) {
      preState = [...items, val];
      setItems(preState);
    } else {
      preState = [val];
      setItems([val]);
    }
    var newIndex = preState.length - 1;

    var newArrElement = [];
    var newArr = [];

    if (input[input.length - 1][0].length === 0) {
      newArrElement = [newIndex];
    } else {
      newArrElement = [...input[input.length - 1][0], newIndex];
    }

    var undo = input.length - 1;
    var redo = null;

    newArr = [newArrElement, undo, redo];
    var Arr = [...input, newArr];
    setInput(Arr);
  }

  function handleUndo(e) {
    var prevUndo = input[input.length - 1][1];
    if (prevUndo !== undefined) {
      var newArrElement = input[prevUndo][0];
      var undo = input[prevUndo][1];
      var redo = input.length - 1;
      var newArr = [newArrElement, undo, redo];
      var Arr = [...input, newArr];
      setInput(Arr);
    }
  }

  function handleRedo(e) {
    var prevRedo = input[input.length - 1][2];
    if (prevRedo !== undefined) {
      var newArrElement = input[prevRedo][0];
      var undo = input.length - 1;
      var redo = input[prevRedo][2];
      var newArr = [newArrElement, undo, redo];
      var Arr = [...input, newArr];
      setInput(Arr);
    }
  }

  return (
    <div>
      <div className="form">
        <input type="text" id="element" placeholder="To-Do-List" />

        <button type="submit" onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>

      <div className="Unro">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>
    </div>
  );
}

export default Add;
