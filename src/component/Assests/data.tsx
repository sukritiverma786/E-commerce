import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./baby.png";
import p6_img from "./boy.png";
import p7_img from "./men1.png";
import p8_img from "./img1.jpg";
import p9_img from "./img14.png";
import p10_img from "./product_4.png";
import p11_img from "./img16.png";
import p12_img from "./men.png";

export interface Product {
  id: number;
  name: string;
  image?: string; // Example if image is optional
  new_price: number;
  old_price: number;
}

export const data_product: Product[] = [
  {
    id: 1,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.5,
  },
];
// export default data_product;

export const NewCollections: Product[] = [
  {
    id: 26,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p5_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 25,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p7_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 9,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p8_img,
    new_price: 100.0,
    old_price: 150.5,
  },
  {
    id: 5,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p9_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 31,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p11_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 15,
    name: "Striped flutter Sleeve Ovarlap Collar peplum Hem Blouse",
    image: p12_img,
    new_price: 100.0,
    old_price: 150.5,
  },
];
// export default NewCollection;
