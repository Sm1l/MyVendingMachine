import React from "react";
import { useSelector } from "react-redux";

import "./productsContainer.scss";

import Product from "components/Product";

const ProductsContainer = () => {
  const products = useSelector((store) => store.products.products);

  return (
    <div className="productsContainer">
      <h2 className="productsContainer__title">Choose product</h2>
      <div className="productsContainer__box">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
