import mongoose, { Schema, Document, model } from "mongoose";

interface IVendor {
  username: string;
  email: string;
  password: string;
  date: Date;
}

interface Ven extends Document {
  username: string;
  email: string;
  password: string;
  date: Date;
}

interface userModelInterface extends mongoose.Model<any> {
  build(attr: IVendor): Ven;
}
const vendorSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String },
  date: { type: Date, default: Date.now },
});

const Vendor = model<any, userModelInterface>("vendor", vendorSchema);

vendorSchema.statics.build = (attr: IVendor) => {
  return new Vendor(attr);
};

export { Vendor };
