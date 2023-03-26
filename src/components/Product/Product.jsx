import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct, boughtProduct } from "store/productSlice";
import { spendCash } from "store/cashSlice";

import "./product.scss";

const Product = ({ product: { title, price, description, quantity, id } }) => {
  const dispatch = useDispatch();
  const cash = useSelector((store) => store.cash.cash);

  const handleClick = () => {
    if (cash >= price) {
      dispatch(spendCash({ price }));
      dispatch(buyProduct({ id }));
      dispatch(boughtProduct({ id }));
    } else {
      console.log("У вас недостаточно денег");
      alert("У вас недостаточно денег");
    }
  };

  return (
    <div className={quantity ? "product" : "product empty"}>
      <span className="product__title">{`${title}`}</span>
      <span className="product__price">{`Price: ${price}`}</span>
      <span className="product__quantity">{`Quantity: ${quantity} pcs`}</span>
      <span className="description">{`Description: ${description}`}</span>
      <button className="product__button button" onClick={handleClick}>
        Buy
      </button>
    </div>
  );
};

export default Product;
