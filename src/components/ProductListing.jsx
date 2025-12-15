import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./ProductListing.css";

function ProductListing() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.items);

  // Get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.productId === productId);
  };

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
  };

  return (
    <div className="product-listing-page">
      <div className="page-header">
        <h1>Our Plants</h1>
        <p>Browse our selection of beautiful houseplants</p>
      </div>

      {categories.map((category) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {products
              .filter((p) => p.category === category)
              .map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">{product.image}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <button
                    className={`add-to-cart-btn ${
                      isProductInCart(product.id) ? "disabled" : ""
                    }`}
                    onClick={() => handleAddToCart(product)}
                    disabled={isProductInCart(product.id)}
                  >
                    {isProductInCart(product.id) ? "In Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductListing;
