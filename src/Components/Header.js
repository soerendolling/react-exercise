import "./Header.css";

function Header({ title }) {
  function handleClickAdd(event) {
    console.log("A new Task would have been added");
  }
  return (
    <header className="header-layout">
      <h2 className="header__title">{title}</h2>
      <button className="header__button" onClick={handleClickAdd}>
        Add ToDo's
      </button>
    </header>
  );
}

export default Header;
