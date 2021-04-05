import "./ToDoBoxTitle.css";

function ToDoBoxTitle({ toDoTitle }) {
  console.log(toDoTitle);
  return <p className="toDoTitle">{toDoTitle}</p>;
}

export default ToDoBoxTitle;
