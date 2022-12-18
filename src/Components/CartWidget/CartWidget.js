import "./CartWidget.css";

const CartWidget = () => {
  return (
    <>
      <a href="/cart" className="cart">
        <img
          className="cart-img"
          src="https://res.cloudinary.com/ddauluwus/image/upload/c_scale,h_50,w_47/v1669300834/Book%20Store/basket-cart-icon-27_dfidnw.png"
        />

        <p className="cart-count">5</p>
      </a>
    </>
  );
};

export default CartWidget;
