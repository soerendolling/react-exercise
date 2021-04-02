import "./MainContent.css";
import ToDoBoxTitle from "./ToDoBoxTitle";
import ToDoBoxButton from "./ToDoBoxButton";

function MainContent({ toDoTitle, number }) {
  return (
    <div className="toDoBox">
      <ToDoBoxTitle toDoTitle={toDoTitle} />
      <ToDoBoxButton number={1} toDoTitle={toDoTitle} />
    </div>
  );
}

export default MainContent;
