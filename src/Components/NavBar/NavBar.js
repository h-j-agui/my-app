import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <h2>Book Store</h2>

      <button className="buttons-navbar">Fiction</button>
      <button className="buttons-navbar">Adventure</button>
      <button className="buttons-navbar">Mystery</button>
      <button className="buttons-navbar">Books for Kids</button>

      <CartWidget />
    </div>
  );
};

export default NavBar;
