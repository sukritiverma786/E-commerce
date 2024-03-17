import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Item from "../component/item/Item";
import { appProduct } from "../component/Assests/all_products";

interface ShopCategoryProps {
  category: string;
  banner?: string;
}

const ShopCategory: React.FC<ShopCategoryProps> = ({ category, banner }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <>
      <div className="shop">
        <div className="shop-left">
          <h1>FlAT 50% OFF</h1>
          <p>12 HOURS 20MINS</p>
          <button>Explore Now</button>
        </div>
        <div className="shop-category">
          <img className="shopcategory-banner" src={banner} alt="" />
        </div>
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          <div className="shop-sort">
            Sort by <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item: appProduct, i: number) => {
          if (category === item.category) {
            return <Item key={i} item={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </>
  );
};

export default ShopCategory;
