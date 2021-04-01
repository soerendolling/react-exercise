import "./Header.css";

function Header({ title }) {
  function handleClickAdd(event) {
    console.log("A new Task would have been added");
  }
  return (
    <header className="header-layout">
      <h2 className="header__title">{title}</h2>
      <form className="header__form">
        <input type="text" />
        <button className="header__button" onClick={handleClickAdd}>
          Add ToDo's
        </button>
      </form>
    </header>
  );
}

export default Header;
