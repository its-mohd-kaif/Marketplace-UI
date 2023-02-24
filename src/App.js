import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import Subscription from "./components/Subscription";

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
