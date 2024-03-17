import React from "react";
import "./Popular.css";
import { data_product } from "../Assests/data";
import Item from "../item/Item";

const Popular: React.FC = () => {
  return (
    <>
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">

          {data_product.map((item, i) => {
            return <Item key={i} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;
