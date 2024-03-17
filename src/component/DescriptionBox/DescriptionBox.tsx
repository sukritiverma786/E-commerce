import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to our E-Commerce Marketplace with Vendor Integration project!
          We're creating an online shopping space that's not just for buyers but
          also for sellers—people like you who want to sell their products. It's
          like having your own store in a big shopping mall! Think of it like
          this: big online stores are awesome, but they usually don't let
          regular people easily sell their stuff. Our project changes that. If
          you're someone who loves making or selling things, you can join our
          platform, showcase your products, and start selling.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
