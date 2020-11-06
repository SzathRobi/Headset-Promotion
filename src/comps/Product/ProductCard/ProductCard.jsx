import React from "react";

function ProductCard({ img }) {
  return (
    <div className="ProductCard">
      <img src={img} alt="headset" />
      <div className="ProductCard-content">
        <ul>
          <li>
            <h2>Mdr-7zx Headphones</h2>
          </li>
          <li>
            <p>2.76" HD driver unit</p>
          </li>
          <li>
            <p>Resonance-free housing</p>
          </li>
          <li>
            <p>water resistance</p>
          </li>
          <li>
            <p>1 year guarantee</p>
          </li>
          <li>
            <h2 className="product-price">$110</h2>
          </li>
        </ul>
        <button className="buy-btn">BUY NOW</button>
      </div>
    </div>
  );
}

export default ProductCard;
