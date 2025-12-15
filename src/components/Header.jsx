import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleProductsClick = () => {
    navigate("/products");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1
          className="logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          🌿 Paradise Nursery
        </h1>
      </div>

      <nav className="nav-links">
        {location.pathname !== "/products" && (
          <button className="nav-btn" onClick={handleProductsClick}>
            Shop Plants
          </button>
        )}
        {location.pathname !== "/cart" && (
          <button className="nav-btn" onClick={handleCartClick}>
            View Cart
          </button>
        )}
      </nav>

      <div className="cart-icon-container">
        <button
          className="cart-icon-btn"
          onClick={handleCartClick}
          title="View Shopping Cart"
        >
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;
