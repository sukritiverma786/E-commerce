import express, { Request, Response, Router } from "express";
import { Product } from "../Model/Product";

const router: Router = express.Router();

router.post("/addproduct", async (req: Request, res: Response) => {
  try {
    const {
      name,
      image,
      category,
      old_price,
      new_price,
      available,
      stockQuantity,
      date,
      addedBy,
    } = req.body;

    // const product = await Product.findOne({ add_by: req.body.addedby });

    const lastProduct = await Product.findOne().sort({ id: -1 });
    const newId = lastProduct ? lastProduct.id + 1 : 1;
   

    const newProduct = new Product({
      id: newId,
      name,
      image,
      category,
      old_price,
      new_price,
      available,
      stockQuantity,
      date,
      addedBy,
    });
    await newProduct.save();
    res.status(201).json({
      newProduct,
      success: true,
      message: "Product added successfully",
    });
    console.log(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

router.post("/removeproduct", async (req: Request, res: Response) => {
  let deleteProduct = await Product.findOneAndDelete({ id: req.body.id });
  console.log(deleteProduct, "Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

router.get("/allproducts", async (req: Request, res: Response) => {
  let product = await Product.find({});
  console.log("All Product fetched");
  res.send(product);
});

// creating endpoint for newCollection data

router.get("/newcolletion", async (req: Request, res: Response) => {
  let products = await Product.find({});
  let newCollection = products.slice(1).slice(-8);
  console.log("NewCollection Fetched");
  res.send(newCollection);
});

router.get("/popularinwomen", async (req: Request, res: Response) => {
  let products = await Product.find({ category: "women" });
  let popular_in_women = products.slice(0, 4);
  console.log("popular_in_women Fetched");
  res.send(popular_in_women);
});

// creating ,iddleware to fetch user

export default router;
