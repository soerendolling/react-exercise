import "./MainContent.css";
import ToDoBoxTitle from "./ToDoBoxTitle";
import ToDoBoxButton from "./ToDoBoxButton";

function MainContent({ toDoTitle, onClickRemove, status, onToggleComplete }) {
  function onClickDelete() {
    onClickRemove(toDoTitle);
  }

  function toggleBox() {
    onToggleComplete(toDoTitle);
  }

  const classForCompletion = status ? "toDo--completed" : "toDo--pending";

  return (
    <div className={`toDoBox ${classForCompletion}`}>
      <ToDoBoxTitle toDoTitle={toDoTitle} />
      <ToDoBoxButton
        handleDelete={onClickDelete}
        toDoTitle={toDoTitle}
        isCompleted={status}
        handleToggleClick={toggleBox}
      />
    </div>
  );
}

export default MainContent;
