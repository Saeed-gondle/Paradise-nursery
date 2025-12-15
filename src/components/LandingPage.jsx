import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/products");
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-description">
          Welcome to Paradise Nursery, your one-stop shop for beautiful
          houseplants and indoor greenery. We offer a wide selection of plants
          for every home and skill level. From low-maintenance succulents to
          exotic flowering varieties, we have something for everyone. Transform
          your living space into a lush, green paradise with our premium
          selection of healthy, vibrant houseplants. Whether you're a seasoned
          plant parent or just starting your green journey, we're here to help
          you find the perfect plants for your home.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
