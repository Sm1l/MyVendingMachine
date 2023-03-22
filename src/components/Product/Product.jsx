import React from "react";
import "./product.scss";

const Product = ({ name, price, value }) => {
  return (
    <div>
      <span>{`Название товара ${name}`}</span>
      <span>{`Цена ${price}`}</span>
      <span>{`Количество в остатке ${value}`}</span>
    </div>
  );
};

export default Product;
