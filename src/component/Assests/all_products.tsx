// import img1 from "./img1.jpg";
import img1 from "./product_1.png";
import img2 from "./product_2.png";
// // import img2 from "./img2.png";
import img3 from "./product_3.png";
import img4 from "./product_4.png";
// import img3 from "./img12.png";
// import img4 from "./images.jpeg";
import img5 from "./img14.png";
import img6 from "./img15.png";
import img7 from "./img16.png";
import img9 from "./img1.jpg";
import img12 from "./img21.png";
import img13 from "./img25.png";
import img14 from "./product_3.png";
import img15 from "./product_4.png";
import img17 from "./exclusive_imgae.png";
import men14 from "./man22.png";
import men15 from "./men.png";
import men16 from "./man25.png";
import men17 from "./man26.png";
import men18 from "./mann.png";
import men19 from "./man3.jpg";
import men20 from "./men1.png";
import men21 from "./man5.png";
import men22 from "./man6.png";
import men23 from "./man7.png";
import men24 from "./download (7).jpeg";
import men25 from "./mann1.jpeg";
import kid1 from "./boy.png";
import kid2 from "./baby.png";
import kid3 from "./kid9.png";
import kid4 from "./kid10.png";
import kid5 from "./kid11.png";
import kid6 from "./download (4).jpeg";
import kid7 from "./images (16).jpeg";
import kid8 from "./download (2).jpeg";
import kid9 from "./img19.png";
import kid10 from "./img20.png";
import kid11 from "./img17.png";

// import p8_img from "./img1.jpg";
// import p9_img from "./women2.jpeg.png";
// import p10_img from "./product_4.png";
// import p11_img from "./women.png";
// import p12_img from "./men.png";



export interface appProduct {
  id: number;
  name: string;
  category: string;
  image?: string;
  new_price: number;
  old_price: number;
}

const all_product: appProduct[] = [
  {
    id: 1,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img1,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 2,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img2,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img3,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 4,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img4,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 5,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img5,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img6,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img7,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "kids",
    image: kid11,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img9,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "kids",
    image: kid10,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "kids",
    image: kid9,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img12,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img13,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "mens",
    image: men14,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "mens",
    image: men15,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "mens",
    image: men16,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "mens",
    image: men17,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "mens",
    image: men18,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "men",
    image: men19,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "mens",
    image: men20,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "mens",
    image: men21,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "mens",
    image: men22,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "kids",
    image: kid8,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "mens",
    image: men23,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "kids",
    image: kid1,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "kids",
    image: kid2,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "kids",
    image: kid3,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "kids",
    image: kid4,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "kids",
    image: kid5,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "Womens",
    image: img14,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img15,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "kids",
    image: kid7,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "womens",
    image: img17,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "kids",
    image: kid6,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "mens",
    image: men24,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Boys Orange ColourBlocked Hooded SweatShirt",
    category: "mens",
    image: men25,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default all_product;
