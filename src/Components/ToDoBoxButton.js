import "./ToDoBoxButton.css";

function ToDoBoxButton({ number, toDoTitle }) {
  function handleClickDelete() {
    console.log(`The Task ${number} would be deleted`);
  }

  function handleClickDone() {
    return console.log(`The ${toDoTitle} is done`);
  }
  return (
    <div className="ToDoBoxButtonsLayout">
      <button className="toDoBoxDelete" onClick={handleClickDelete}>
        Delete
      </button>
      <button className="toDoBoxDone" onClick={handleClickDone}>
        Done
      </button>
    </div>
  );
}

export default ToDoBoxButton;
