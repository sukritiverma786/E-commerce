import express, { Request, Response, Router } from "express";
import { Vendor } from "../Model/Vendor";
import { Product } from "../Model/Product";
import jwt, { JwtPayload } from "jsonwebtoken";
const router: Router = express.Router();

router.post("/addvendor_product", async (req: Request, res: Response) => {
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

router.post("/signupvendor", async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await Vendor.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        errors: "A user with this email already exists",
      });
    }

    const vendor = new Vendor({
      username,
      email,
      password,
    });
    await vendor.save();

    const data = {
      vendor: {
        id: vendor.id,
      },
    };

    const token = jwt.sign(data, "secret_ecom", {
      expiresIn: "1h",
    });
    res.json({ vendor, success: true, token });
    console.log(vendor);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

router.post("/loginvendor", async (req: Request, res: Response) => {
  let user = await Vendor.findOne({ email: req.body.email });
  console.log(user.username, "is this username");
  let userName = user.username;
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom", {
        expiresIn: "1h",
      });
      res.json({ success: true, token, userName });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email Id" });
  }
});

export default router;
