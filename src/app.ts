import express from "express";
import mongoose from "mongoose";
import { Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { connectdb } from "./DB/db";
import UserRouter from "./router/User";
import ProductRouter from "./router/Product";
import VendorRouter from "./router/Vendor";

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectdb();


const corsOptions = {
  origin: ["http://127.0.0.1:5173", "http://localhost:3000"], // Replace with your frontend domains
};

app.use(cors(corsOptions));
// Use the ProductRouter
app.use(ProductRouter);
app.use(UserRouter);
app.use(VendorRouter);

// Define a default route
app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

// Image storage Engine
const storage = multer.diskStorage({
  destination: "./upload/Images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));

// Handle file upload route
app.post("/upload", upload.single("product"), (req: Request, res: Response) => {
  console.log("File uploaded successfully");
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file?.filename}`,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
