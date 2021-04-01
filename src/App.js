import "./App.css";
// import React, { useReact } from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

function App(toDoTitle) {
  // const [toDo, setToDo] = useReact("");

  return (
    <div className="App">
      <Header title="My ToDos" />
      <MainContent toDoTitle={toDoTitle} />
    </div>
  );
}

export default App;
