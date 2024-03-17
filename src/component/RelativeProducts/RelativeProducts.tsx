import React from "react";
import "./RelativeProducts.css";
import { data_product } from "../Assests/data";
// import all_product from "../Assests/all_products";
import Item from "../item/Item";

const RelativeProducts: React.FC = () => {
  return (
    <div className="relativeproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProducts-item">
        {data_product.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </div>
  );
};
// Filter women's category items
// const womenItems = all_product.filter((item) => item.category === "womens");

// // Display only 4 items at a time
// const itemsToShow = womenItems.slice(0, 4);

// const RelativeProducts: React.FC = () => {
//   return (
//     <div className="relativeproducts">
//       <h1>Related Products</h1>
//       <hr />
//       <div className="relatedProducts-item">
//         {itemsToShow.map((item, i) => {
//           return <Item key={i} item={item} />;
//         })}
//       </div>
//     </div>
//   );
// };
export default RelativeProducts;
