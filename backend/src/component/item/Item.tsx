import React from "react";
import { Product } from "../Assests/data";
import "./Item.css";
import { Link } from "react-router-dom";

interface ItemProps {
  item: Product;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { name, new_price, old_price } = item;
  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the image is clicked
  };
  return (
    <div className="item">
      <Link to={`/product/${item.id}`}>
        <img onClick={handleClick} src={item.image} alt="" />
      </Link>
      <p>{name}</p>
      <div className="item-price">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
};

export default Item;
