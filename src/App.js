import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

function App() {
  const [toDo, setToDo] = useState([]);

  function handleClickAdd(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.toDoTitle;

    const newToDo = [...toDo, input.value];
    setToDo(newToDo);

    form.reset();
  }

  function getToDo() {
    const arrayOfToDo = toDo.map((toDo) => {
      return <MainContent toDoTitle={toDo} key={toDo} />;
    });

    console.log(arrayOfToDo);
    return arrayOfToDo;
  }

  return (
    <div className="App">
      <Header title="My ToDos" onClickAdd={handleClickAdd} />
      <main className="main-layout">{getToDo()}</main>
    </div>
  );
}

export default App;
