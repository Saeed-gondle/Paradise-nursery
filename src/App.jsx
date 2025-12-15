import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductListing from "./components/ProductListing";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

function App() {
  return (
    <Router basename="/Paradise-nursery/">
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/products"
            element={
              <>
                <Header />
                <ProductListing />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <ShoppingCart />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
