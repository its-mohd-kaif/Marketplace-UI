import React from "react";
import "./Footer.css";
import fb from "../Images/fb.png";
import tw from "../Images/tw.png";
import ig from "../Images/ig.png";
import inImg from "../Images/in.png";
function Footer() {
  // Footer Component
  return (
    <section className="footerSection">
      <footer className="footer">
        <div>
          <ul className="ful">
            <li className="liTitle">Your Company</li>
            <li>
              Our mission is to make gadjet{" "}
              <aside>purchase, accessible and affordable.</aside>
            </li>
          </ul>
        </div>
        <div>
          <ul className="ful">
            <li className="liTitle">Helpful Links</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Marketplace</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <ul className="ful">
            <li className="liTitle">Site Map</li>
            <li>Our Mobile App</li>
            <li>Frequently Asked Questions</li>
            <li>Help Desk</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div>
          <ul className="ful">
            <li className="liTitle">Contact Us</li>
            <li className="liSocial">
              <div className="liSocialDiv">
                <img src={fb} alt="fb" />
              </div>
              <div className="liSocialDiv">
                <img src={tw} alt="ftw" />
              </div>
              <div className="liSocialDiv">
                <img src={ig} alt="ig" />
              </div>
              <div className="liSocialDiv">
                <img src={inImg} alt="in" />
              </div>
            </li>
            <li>hello@yourcompany.com</li>
          </ul>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
