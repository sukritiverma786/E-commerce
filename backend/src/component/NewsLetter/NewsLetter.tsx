import React from "react";
import "./NewsLetter.css";
const NewsLetter: React.FC = () => {
  return (
    <>
      <div className="newsletter">
        <h1>get Exclusive Offers on Yowr Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div className="inputBtn">
          <input type="email" placeholder="Your Email id" />
          <button>Sbscribe</button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
