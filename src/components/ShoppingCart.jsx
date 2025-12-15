import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import "./ShoppingCart.css";

function ShoppingCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart-page">
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Start shopping to add items to your cart!</p>
          <button
            className="continue-shopping-btn"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <div className="cart-summary">
          <div className="summary-item">
            <span className="summary-label">Total Items:</span>
            <span className="summary-value">{totalItems}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Total Cost:</span>
            <span className="summary-value">${totalCost.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.productId} className="cart-item">
              <div className="item-image">{item.image}</div>
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-unit-price">
                  Unit Price: ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="quantity-controls">
                <button
                  className="qty-btn decrease"
                  onClick={() => handleDecrement(item.productId)}
                >
                  −
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button
                  className="qty-btn increase"
                  onClick={() => handleIncrement(item.productId)}
                >
                  +
                </button>
              </div>

              <div className="item-total">
                <p className="item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleRemove(item.productId)}
                title="Remove from cart"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <button
            className="continue-shopping-btn"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
          <button
            className="checkout-btn"
            disabled
            title="Checkout coming soon"
          >
            Checkout - Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
