import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct, boughtProduct } from "store/productSlice";
import { spendCash } from "store/cashSlice";

import "./product.scss";

const Product = ({ product }) => {
  const id = product.id;
  const price = product.price;
  const quantity = product.quantity;

  const dispatch = useDispatch();
  //*----------------------------------------

  // const [enCash, setEnCash] = useState(false);

  // useEffect(() => {
  //   if (gel) {
  //     defaults;
  //   }
  // }, [price]);

  //*----------------------------------------

  const state = useSelector((store) => store.cash);
  const enoughCash = state.enoughCash;

  const handleClick = () => {
    if (quantity) {
      dispatch(spendCash({ price }));
    }
    // console.log(id);
    if (enoughCash) {
      dispatch(buyProduct({ id })); //!как передать актуальное значение?
      dispatch(boughtProduct({ id })); //!как передать актуальное значение?
    }
  };

  // const closeModalHandleClick = () => {
  //   dispatch(toggleModalIsVisible());
  // };
  return (
    <div className={quantity ? "product" : "product empty"}>
      <span className="product__title">{`${product.title}`}</span>
      <span className="product__price">{`Price: ${product.price}`}</span>
      <span className="product__quantity">{`Quantity: ${product.quantity} pcs`}</span>
      <span className="description">{`Description: ${product.description}`}</span>
      <button className="product__button button" onClick={handleClick}>
        Buy
      </button>
    </div>
  );
};

export default Product;
