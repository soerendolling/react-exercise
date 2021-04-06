import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

function App() {
  const [toDo, setToDo] = useState([]);

  function handleClickAdd(theTitle) {
    const newToDo = [
      ...toDo,
      {
        toDoTitle: theTitle,
        isCompleted: false,
      },
    ];
    setToDo(newToDo);
  }

  function handleToggleComplete(toDoTitle) {
    const newToDo = toDo.map((toDo) => {
      if (toDo.toDoTitle === toDoTitle) {
        return {
          ...toDo,
          isCompleted: !toDo.isCompleted,
        };
      } else {
        return toDo;
      }
    });
    setToDo(newToDo);
  }

  function getToDo() {
    const arrayOfToDo = toDo.map((toDo) => {
      return (
        <MainContent
          toDoTitle={toDo.toDoTitle}
          key={toDo.toDoTitle}
          status={toDo.isCompleted}
          onClickRemove={handleToDoRemove}
          onToggleComplete={handleToggleComplete}
        />
      );
    });

    return arrayOfToDo;
  }

  function handleToDoRemove(toDoTitle) {
    const newToDo = toDo.filter((toDo) => {
      return toDo.toDoTitle !== toDoTitle;
    });
    setToDo(newToDo);
  }

  return (
    <div className="App">
      <Header title="My ToDos" onClickAdd={handleClickAdd} />
      <main className="main-layout">{getToDo()}</main>
    </div>
  );
}

export default App;
