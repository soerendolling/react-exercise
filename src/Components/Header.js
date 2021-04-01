import "./Header.css";

function Header({ title, handleClickAdd }) {
  return (
    <header className="header-layout">
      <h2 className="header__title">{title}</h2>
      <form className="header__form">
        <input type="text" placeholder="Add ToDo Here" name="toDoInput" />
        <button
          type="submit"
          className="header__button"
          onClick={handleClickAdd}
        >
          Add ToDo's
        </button>
      </form>
    </header>
  );
}

export default Header;
