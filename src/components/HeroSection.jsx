import React from "react";
import banner from "../images/Rectangle 10342.png";
import "./HeroSection.css";
function HeroSection() {
  // Hero Section Component
  return (
    <section>
      <div className="heroSection">
        <div className="heroColumn1">
          <div className="bannerTxt">WE’RE STILL</div>
          <div className="bannerBigTxt">
            Filling up <aside>the spaces.</aside>
          </div>
          <div className="bannerBtns">
            <div>
              <button className="exploreBtn">Explore Marketplace</button>
            </div>
            <div>
              <div className="topDeals">See Top Deals</div>
            </div>
          </div>
        </div>
        <div>
          <img className="bannerImg" src={banner} alt="banner" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
