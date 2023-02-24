import React from "react";
import "./Card.css";
import heart from "../images/Vector(2).png";
import item from "../images/Image.png";
function Card() {
  return (
    <div className="productCard">
      <div className="cardTitle">
        <div className="cardTitle1">-59%</div>
        <div className="cardTitle2">
          <img src={heart} alt="heartImg" />
        </div>
      </div>
      <div>
        <img className="itemImg" src={item} alt="item" />
      </div>
      <div className="cardTitle">
        <div className="cardTitle3">Audio Devices</div>
        <div className="cardTitle4">₦600,000</div>
      </div>
      <div className="cardDesc">
        Nokia Essential Wireless <aside>Headphones 120CM BLACK</aside>
      </div>
      <div className="cardBtns">
        <div>
          <div className="addCart">Add To Cart</div>
        </div>
        <div>
          <button className="buyBtn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
