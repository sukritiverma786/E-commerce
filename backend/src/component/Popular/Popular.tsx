import React, { useEffect, useState } from "react";
import "./Popular.css";
// import { data_product } from "../Assests/data";
import Item from "../item/Item";

const Popular: React.FC = () => {

  const[popularProducts,setPopularProducts]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/popularinwomen").then((response)=>response.json()).then((data)=>setPopularProducts(data));
  },[])
  return (
    <>
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">

          {popularProducts.map((item, i) => {
            return <Item key={i} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;
