import React from "react";
import { useDispatch } from "react-redux";
import { buyProduct } from "store/productSlice";
import { spendCash } from "store/cashSlice";

import "./product.scss";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const id = product.id;
  const price = product.price;

  const handleClick = () => {
    // console.log(id);
    dispatch(buyProduct({ id }));
    dispatch(spendCash({ price }));
  };

  // const closeModalHandleClick = () => {
  //   dispatch(toggleModalIsVisible());
  // };
  return (
    <div className="product">
      <span className="product__title">{`${product.title}`}</span>
      <span className="product__price">{`Price: ${product.price}`}</span>
      <span className="product__quantity">{`Quantity: ${product.quantity} pcs`}</span>
      <span className="description">{`Description: ${product.price}`}</span>
      <button className="product__button button" onClick={handleClick}>
        Buy
      </button>
    </div>
  );
};

export default Product;
