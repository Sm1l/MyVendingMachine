import React from "react";
import "./boughtproduct.scss";

const BoughtProduct = ({ product }) => {
  return (
    <div className="boughtproduct">
      <span>{product.title}</span>
      <span>{product.quantity}</span>
    </div>
  );
};

export default BoughtProduct;
