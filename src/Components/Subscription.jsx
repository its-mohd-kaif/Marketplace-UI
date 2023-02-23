import React from "react";
import "./Subscription.css";
function Subscription() {
  // Subscribe Component
  return (
    <section className="subscribeSection">
      <div className="subscribeTitle">Subscribe to Our Newsletter</div>
      <div>
        Don't miss out on our top deals! Dont worry we will not spam you.
      </div>
      <div className="inputSection">
        <input placeholder="Enter your Email Here" className="input" />
        <div className="sbusBtnDiv">
          <button className="subsBtn">Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
