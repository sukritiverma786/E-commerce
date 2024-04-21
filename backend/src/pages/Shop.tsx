import React from "react";
import Hero from "../component/Hero/Hero";
import Popular from "../component/Popular/Popular";
import Offers from "../component/Offers/Offers";
import Newcollection from "../component/NewCollections/NewCollection";
import NewsLetter from "../component/NewsLetter/NewsLetter";

const Shop: React.FC = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Newcollection />
      <NewsLetter />
    </div>
  );
};

export default Shop;
