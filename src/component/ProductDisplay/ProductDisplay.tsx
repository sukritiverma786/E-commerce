import React, { useContext } from "react";
import "./ProductDisplay.css";
import { appProduct } from "../Assests/all_products";
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.jpeg";
import { ShopContext } from "../../Context/ShopContext";

interface pro {
  product?: appProduct;
}

const ProductDisplay = (props: pro) => {
  const { product } = props;
  // console.log(product?.image, "image");
  const { addtoCart } = useContext(ShopContext);
  return (
    <>
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product?.image} alt="" />
            <img src={product?.image} alt="" />
            <img src={product?.image} alt="" />
            <img src={product?.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img
              className="productdisplay-main-img"
              src={product?.image}
              alt=""
            />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product?.name}</h1>
          <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>{123}</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              ${product?.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              ${product?.new_price}
            </div>
          </div>
          <div className="productdispaly-right-description">
            A lightweight, usually knitted, pullover shirt, close-fitting
          </div>
          <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-right-size">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XLL</div>
            </div>
          </div>
          <div className="productdisplay-right-size-btn">
            <button onClick={() => addtoCart(product?.id)}>ADD TO CART</button>
          </div>
          <p className="productdisplay-right-category">
            <span>Category</span> Women, T-shirt, Crop Top
          </p>
          <p className="productdisplay-right-category">
            <span>Tags</span> Modern, Latest
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
