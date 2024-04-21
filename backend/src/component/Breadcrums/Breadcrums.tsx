import React from "react";
import "./Breadcrums.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { appProduct } from "../Assests/all_products";

interface pro {
  product?: appProduct;
}

const Breadcrums = (props: pro) => {
  const { product } = props;
  return (
    <>
      <div className="breadcrums">
        HOME <FontAwesomeIcon icon={faArrowRight} /> SHOP
        <FontAwesomeIcon icon={faArrowRight} /> {product?.category}
        <FontAwesomeIcon icon={faArrowRight} /> {product?.name}
      </div>
      ;
    </>
  );
};

export default Breadcrums;
