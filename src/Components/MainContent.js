import "./MainContent.css";
import ToDoBoxTitle from "./ToDoBoxTitle";
import ToDoBoxButton from "./ToDoBoxButton";

function MainContent(todoTitle, number) {
  return (
    <main className="main-layout">
      <div className="toDoBox">
        <ToDoBoxTitle todoTitle="dish washing" />
        <ToDoBoxButton number={1} todoTitle="dishwashing" />
      </div>
    </main>
  );
}

export default MainContent;
