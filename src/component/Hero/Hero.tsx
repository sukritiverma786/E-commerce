import React from "react";
import "./Hero.css";
import waving_hand from "../Assests/waving_hand.png";
import hero from "../Assests/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>new</p>
              <img src={waving_hand} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className="hero-right">
          <img className="setSize" src={hero} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
