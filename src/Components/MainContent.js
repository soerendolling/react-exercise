import "./MainContent.css";
import ToDoBoxTitle from "./ToDoBoxTitle";
import ToDoBoxButton from "./ToDoBoxButton";

function MainContent({ toDoTitle, onClickRemove }) {
  function onClickDelete() {
    onClickRemove(toDoTitle);
  }

  return (
    <div className="toDoBox">
      <ToDoBoxTitle toDoTitle={toDoTitle} />
      <ToDoBoxButton handleDelete={onClickDelete} toDoTitle={toDoTitle} />
    </div>
  );
}

export default MainContent;
