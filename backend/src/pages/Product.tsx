import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../component/Breadcrums/Breadcrums";
import ProductDisplay from "../component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../component/DescriptionBox/DescriptionBox";
import RelativeProducts from "../component/RelativeProducts/RelativeProducts";

interface id {
  id: number;
}

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e: id) => e.id === Number(productId));
  return (
    <>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelativeProducts />
    </>
  );
};



export default Product;
