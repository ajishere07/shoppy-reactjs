import React from "react";
import AppCarousel from "../AppCarousel";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import CategoryTab from "../CategoryTab";
import ProductsGrid from "../ProductsGrid";
import Navbar from "../Navbar";

function HomePage() {
  const imgForCarousel = {
    img1: "https://m.media-amazon.com/images/I/71VCHx-ZvdL._SX3000_.jpg",
    img2: "https://m.media-amazon.com/images/I/71ANzKUFJBL._SX3000_.jpg",
    img3: "https://m.media-amazon.com/images/I/71nijFiRV+L._SX3000_.jpg",
  };
  return (
    <div>
      <Navbar />
      <CategoryTab />
      <AppCarousel
        img1={imgForCarousel.img1}
        img2={imgForCarousel.img2}
        img3={imgForCarousel.img3}
      />
      <ProductsGrid />
    </div>
  );
}
export default HomePage;
