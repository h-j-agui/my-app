import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const sumar = (num1, num2) => {
    return num1 + num2;
  };

  return (
    <div className="navbar-container">
      <h2>Book Store</h2>
      <button className="buttons-navbar">Libros para Ninos</button>
      <button className="buttons-navbar">Libros para Adultos</button>
      <button className="buttons-navbar">Books for Kids</button>
      <button className="buttons-navbar">Books for Adults</button>

      <CartWidget />
    </div>
  );
};

export default NavBar;