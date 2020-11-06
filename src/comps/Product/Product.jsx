import React, { useEffect, useState } from "react";
import TitleContainer from "../TitleContainer/TitleContainer";
import ProductCard from "./ProductCard/ProductCard";

import headset_white from "./imgs/headset_white.png";
import headset_pink from "./imgs/headset_pink.png";
import headset_blue from "./imgs/headset_blue.png";
import headset_black from "./imgs/headset_black.png";
import headset_red from "./imgs/headset_red.png";

import AliceCarousel from "react-alice-carousel";


function Product() {
  return (
    <div className="Product" id="product">
      <TitleContainer
        category="LATEST PRODUCTS"
        title="We Have Lots Of Excellent And High Quality Products."
      />
      <div className="product-cards">
        <AliceCarousel infinite autoPlay autoPlayInterval="4000" >
          <ProductCard img={headset_white} />
          <ProductCard img={headset_pink} />
          <ProductCard img={headset_blue} />
          <ProductCard img={headset_black} />
          <ProductCard img={headset_red} />
        </AliceCarousel>
      </div>
    </div>
  );
}

export default Product;
