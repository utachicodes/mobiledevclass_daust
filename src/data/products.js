// src/data/products.js
// Images for Student Government goodies (import for Vite bundling)
import bottle from "../assets/GoodiesMedias/Goodies/bottle.png";
import capBlue from "../assets/GoodiesMedias/Goodies/cap-blue.png";
import hoodieOnceAlwaysWhite from "../assets/GoodiesMedias/Goodies/hoodie-oncealways-white.png";
import hoodieProudGrey from "../assets/GoodiesMedias/Goodies/hoodie-proud-grey.png";
import hoodieProudWhite from "../assets/GoodiesMedias/Goodies/hoodie-proud-white.png";
import hoodiesOnceAlways from "../assets/GoodiesMedias/Goodies/hoodies-oncealways.png";
import mug from "../assets/GoodiesMedias/Goodies/mug.png";
// PDFs exist but are not used as images in the shop grid
import tshirtCbiBlue from "../assets/GoodiesMedias/Goodies/tshirt-cbi-blue.png";
import tshirtElecGrey from "../assets/GoodiesMedias/Goodies/tshirt-elec-grey.png";
import tshirtsCbi from "../assets/GoodiesMedias/Goodies/tshirts-cbi.png";
import tshirtsElec from "../assets/GoodiesMedias/Goodies/tshirts-elec.png";
import tshirtsInnov from "../assets/GoodiesMedias/Goodies/tshirts-innov.png";
import tshirtsMec from "../assets/GoodiesMedias/Goodies/tshirts-mec.png";
import tshirtsOnceAlways from "../assets/GoodiesMedias/Goodies/tshirts-oncealways.png";
import tshirtsProud from "../assets/GoodiesMedias/Goodies/tshirts-proud.png";
import tshirtsWhereIdeas from "../assets/GoodiesMedias/Goodies/tshirts-whereIdeas.png";

export const CATEGORIES = [
  "All Categories",
  "T-Shirts",
  "Hoodies",
  "Caps",
  "Drinkware",
  "Accessories",
];

export const PRODUCTS = [
  // Drinkware
  {
    id: 1,
    name: "DAUST Water Bottle",
    category: "Drinkware",
    price: 15.0,
    rating: 4.8,
    badge: "Popular",
    image: bottle,
  },
  {
    id: 2,
    name: "DAUST Mug",
    category: "Drinkware",
    price: 10.0,
    rating: 4.7,
    image: mug,
  },

  // Caps
  {
    id: 3,
    name: "DAUST Cap (Blue)",
    category: "Caps",
    price: 12.0,
    rating: 4.6,
    image: capBlue,
  },

  // Hoodies
  {
    id: 4,
    name: 'Hoodie "Once/Always a DAUST innovator" (White)',
    category: "Hoodies",
    price: 35.0,
    rating: 4.9,
    image: hoodieOnceAlwaysWhite,
  },
  {
    id: 5,
    name: 'Hoodie "Proud Parent" (Grey)',
    category: "Hoodies",
    price: 35.0,
    rating: 4.7,
    image: hoodieProudGrey,
  },
  {
    id: 6,
    name: 'Hoodie "Proud Parent" (White)',
    category: "Hoodies",
    price: 35.0,
    rating: 4.7,
    image: hoodieProudWhite,
  },
  {
    id: 7,
    name: 'Hoodies "Once/Always a DAUST innovator" ',
    category: "Hoodies",
    price: 35.0,
    rating: 4.6,
    image: hoodiesOnceAlways,
  },

  // T-Shirts (assorted and singles)
  {
    id: 8,
    name: "T-Shirt Code Build Impact (Blue)",
    category: "T-Shirts",
    price: 18.0,
    rating: 4.5,
    image: tshirtCbiBlue,
  },
  {
    id: 9,
    name: "T-Shirt ELEC Engineer (Grey)",
    category: "T-Shirts",
    price: 18.0,
    rating: 4.5,
    image: tshirtElecGrey,
  },
  {
    id: 10,
    name: "T-Shirts Code Build Impact ",
    category: "T-Shirts",
    price: 18.0,
    rating: 4.4,
    image: tshirtsCbi,
  },
  {
    id: 11,
    name: "T-Shirts ELEC Engineer ",
    category: "T-Shirts",
    price: 18.0,
    rating: 4.4,
    image: tshirtsElec,
  },
  {
    id: 12,
    name: "T-Shirts DAUST Innovator ",
    category: "T-Shirts",
    price: 18.0,
    rating: 4.4,
    image: tshirtsInnov,
  },
  {
    id: 13,
    name: "T-Shirts MECH Engineer ",
    category: "T-Shirts",
    price: 18.0,
    rating: 4.4,
    image: tshirtsMec,
  },
  {
    id: 14,
    name: 'T-Shirts "Once/Always a DAUST innovator" ',
    category: "T-Shirts",
    price: 18.0,
    rating: 4.5,
    image: tshirtsOnceAlways,
  },
  {
    id: 15,
    name: 'T-Shirts "Proud Parent" ',
    category: "T-Shirts",
    price: 18.0,
    rating: 4.6,
    image: tshirtsProud,
  },
  {
    id: 16,
    name: 'T-Shirts "Where Ideas Come to Life" ',
    category: "T-Shirts",
    price: 18.0,
    rating: 4.5,
    image: tshirtsWhereIdeas,
  },
];