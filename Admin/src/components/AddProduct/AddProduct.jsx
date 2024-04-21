import { useState } from "react";
import "./AddProduct.css";
import upload from "../../assets/upload_area.png";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    old_price: "",
    new_price: "",
    addedBy: "admin",
  });

  // const [addedBy, setAddedBy] = useState("admin");
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);
    // productDetails.addedby = "admin";
    await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);

      productDetails.addedBy;
      if (
        productDetails.addedBy !== "vendor" &&
        productDetails.addedBy !== "admin"
      ) {
        throw new Error("Invalid value for addedBy");
      }
      await fetch("http://localhost:5000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          alert(data.success ? "Product Added" : "Failed");
        })
        .catch((error) => {
          console.error("Error occurred during product addition:", error);
          alert("Failed to add product");
        });
    }
  };
  return (
    <>
      <div className="add-product">
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              type="text"
              name="old_price"
              placeholder="Type here"
            />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              type="text"
              name="new_price"
              placeholder="Type here"
            />
          </div>
        </div>
        <div className="addedCom">
          <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select
              value={productDetails.category}
              onChange={changeHandler}
              name="category"
              className="add-product-selector"
            >
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kid">Kid</option>
            </select>
          </div>
          <div className="addedName">
            <p>Added By</p>
            <select
              value={productDetails.addedBy}
              onChange={changeHandler}
              name="addedBy"
              className="add-product-selector"
            >
              <option value="women">admin</option>
            </select>
           
          </div>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload}
              className="addproduct-thumnail-img"
              alt="upload_Area"
              style={{ backgroundColor: "grey" }}
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>
        <button onClick={() => Add_Product()} className="addproduct-btn">
          ADD
        </button>
      </div>
    </>
  );
};

export default AddProduct;
