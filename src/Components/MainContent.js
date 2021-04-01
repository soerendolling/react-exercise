import "./MainContent.css";
import ToDoBoxTitle from "./ToDoBoxTitle";
import ToDoBoxButton from "./ToDoBoxButton";

function MainContent(toDoTitle, number) {
  return (
    <main className="main-layout">
      <div className="toDoBox">
        <ToDoBoxTitle toDoTitle="dish washing" />
        <ToDoBoxButton number={1} toDoTitle="dishwashing" />
      </div>
    </main>
  );
}

export default MainContent;
