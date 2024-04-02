import React, { useState, ChangeEvent } from "react";
import "./Vendor.css";
import upload from "../Assests/upload_area.png";

const Vendor: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    old_price: "",
    new_price: "",
    addedBy: "vendor",
  });
    

  const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const addProduct = async () => {
    console.log(productDetails, "here all information");
    if (!image) {
      alert("Please select an image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("product", image);

      console.log("Added By:", productDetails.addedBy);
      const uploadResponse = await fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image");
      }

      const responseData = await uploadResponse.json();

      if (!responseData.success) {
        throw new Error("Image upload failed");
      }

      productDetails.image = responseData.image_url;

      if (
        productDetails.addedBy !== "vendor" &&
        productDetails.addedBy !== "admin"
      ) {
        throw new Error("Invalid value for addedBy");
      }

      const addProductResponse = await fetch(
        "http://localhost:5000/addproduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productDetails),
        }
      );
      //   setAddedBy(productDetails.addedBy);
      if (!addProductResponse.ok) {
        throw new Error("Failed to add product");
      }

      const data = await addProductResponse.json();

      alert(data.success ? "Product Added" : "Failed to add product");
    } catch (error) {
      console.error("Error occurred during product addition:", error);
      alert("Failed to add product");
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
              <option value="vendor">vendor</option>
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
        <button onClick={addProduct} className="addproduct-btn">
          ADD
        </button>
      </div>
    </>
  );
};

export default Vendor;
