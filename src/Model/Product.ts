import mongoose, { Schema, Document } from "mongoose";

interface IProduct {
  id: number;
  name: string;
  image: string;
  category: string;
  old_price: number;
  new_price: number;
  available: boolean;
  stockQuantity: number;
  date: Date;
  addedBy: string;
}

interface Pro extends mongoose.Document {
  id: number;
  name: string;
  image: string;
  category: string;
  old_price: number;
  new_price: number;
  available: boolean;
  stockQuantity: number;
  date: Date;
  addedBy: string;
}

interface userModelInterface extends mongoose.Model<any> {
  build(attr: IProduct): Pro;
}
const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  available: { type: Boolean, default: true },
  addedBy: { type: String, default: "admin" },


  date: { type: Date, default: Date.now },
});

const Product = mongoose.model<any, userModelInterface>(
  "product",
  productSchema
);

productSchema.statics.build = (attr: IProduct) => {
  return new Product(attr);
};

export { Product };
