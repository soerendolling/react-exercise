import "./ToDoBoxButton.css";

function ToDoBoxButton({ handleDelete, handleToggleClick, isCompleted }) {
  return (
    <div className="ToDoBoxButtonsLayout">
      <button className="toDoBoxDelete" onClick={handleDelete}>
        Delete
      </button>
      <button className="toDoBoxDone" onClick={handleToggleClick}>
        {isCompleted ? "Complete" : "Pending"}
      </button>
    </div>
  );
}

export default ToDoBoxButton;
