import "./ToDoBoxCross.css";

function ToDoBoxCross({ handleDelete }) {
  return (
    <button className="toDoBoxDelete" onClick={handleDelete}>
      X
    </button>
  );
}

export default ToDoBoxCross;
