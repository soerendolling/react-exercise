import "./Header.css";

function Header({ title, onClickAdd }) {
  return (
    <header className="header-layout">
      <h2 className="header__title">{title}</h2>
      <form className="header__form" onSubmit={onClickAdd}>
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
