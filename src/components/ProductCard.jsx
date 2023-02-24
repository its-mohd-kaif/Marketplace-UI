import React from "react";
import arrow from "../images/Vector(1).png";
import Card from "./Card";
import "./ProductCard.css";
function ProductCard(props) {
  // Product Component
  return (
    <section className="productCardSection">
      <div className="productTitle">
        <div>{props.value}</div>
        <div>
          Explore&nbsp;&nbsp;
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </div>
      </div>
      <div className="productCards">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default ProductCard;
