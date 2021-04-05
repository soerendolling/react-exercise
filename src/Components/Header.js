import "./Header.css";

function Header({ title, onClickAdd }) {
  function handleClickAdd(event) {
    event.preventDefault();
    const form = event.target;

    onClickAdd(form.toDoTitle.value);
    // const input = form.toDoTitle;
    // const newToDo = [...toDo, input.value];
    // setToDo(newToDo);

    form.reset();
  }
  return (
    <header className="header-layout">
      <h2 className="header__title">{title}</h2>
      <form className="header__form" onSubmit={handleClickAdd}>
        <input
          type="text"
          placeholder="Add ToDo Here"
          name="toDoTitle"
          id="toDoTitle"
          required
        />
        <button type="submit" className="header__button">
          Add ToDo's
        </button>
      </form>
    </header>
  );
}

export default Header;
