import { useEffect, useState } from "react";
import "./ListProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  console.log(allproducts, "true");

  const fetchInfo = async () => {
    await fetch("http://localhost:5000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:5000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <>
      <div className="list-product">
        <h1>All Product List</h1>
        <div className="listproduct-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Old price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Added By</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproduct">
          <hr />

          {allproducts.map((product, index) => {
            return (
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <p>Added By:{product.addedBy}</p>
                {console.log(
                  `Product ${index + 1} Added By: ${product.addedBy}`
                )}
                {/* <p>{product.addedBy}</p> */}
                <FontAwesomeIcon
                  icon={faTimes}
                  className="listproduct-remove-icon"
                  onClick={() => {
                    remove_product(product.id);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListProduct;
