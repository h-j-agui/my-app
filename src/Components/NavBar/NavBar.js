import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = (props) => {
  return (
    <div className="navbar-container">
      <h2>Book Store</h2>

      <button
        onClick={() => {
          props.setGenero("fiction");
        }}
        className="buttons-navbar"
      >
        Fiction
      </button>
      <button
        onClick={() => {
          props.setGenero("adventure");
        }}
        className="buttons-navbar"
      >
        Adventure
      </button>
      <button
        onClick={() => {
          props.setGenero("mystery");
        }}
        className="buttons-navbar"
      >
        Mystery
      </button>
      <button
        onClick={() => {
          props.setGenero("kids");
        }}
        className="buttons-navbar"
      >
        Books for Kids
      </button>

      <CartWidget />
    </div>
  );
};

export default NavBar;
