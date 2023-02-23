import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ProductCard from "./Components/ProductCard";
import Subscription from "./Components/Subscription";

function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <ProductCard value="Our Top Deals" />
      <ProductCard value="Best Selling Product" />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
