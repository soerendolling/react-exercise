import "./ToDoBoxButton.css";

function ToDoBoxButton({ handleDelete, toDoTitle }) {
  function handleClickDone() {
    return console.log(`The ${toDoTitle} is done`);
  }
  return (
    <div className="ToDoBoxButtonsLayout">
      <button className="toDoBoxDelete" onClick={handleDelete}>
        Delete
      </button>
      <button className="toDoBoxDone" onClick={handleClickDone}>
        Done
      </button>
    </div>
  );
}

export default ToDoBoxButton;
