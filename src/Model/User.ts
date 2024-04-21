import mongoose, { Schema, Document } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
  cartData: number;
  date: Date;
}

interface Pro extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  cartData: number;
  date: Date;
}

interface userModelInterface extends mongoose.Model<any> {
  build(attr: IUser): Pro;
}
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now },
});

const Users = mongoose.model<any, userModelInterface>("user", userSchema);

userSchema.statics.build = (attr: IUser) => {
  return new Users(attr);
};

export { Users };
