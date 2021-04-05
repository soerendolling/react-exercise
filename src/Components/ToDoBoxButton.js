import "./ToDoBoxButton.css";

function ToDoBoxButton({ handleToggleClick, isCompleted }) {
  return (
    <div className="ToDoBoxButtonsLayout">
      <button className="toDoBoxDone" onClick={handleToggleClick}>
        {isCompleted ? "Complete" : "Pending"}
      </button>
    </div>
  );
}

export default ToDoBoxButton;
