import React from "react";
import { useSelector } from "react-redux";

import "./boughtroducts.scss";
import BoughtProduct from "components/boughtProduct/BoughtProduct";

const BoughtProducts = () => {
  const boughtProducts = useSelector((store) => store.products.boughtProducts);

  return (
    <div className="boughtproducts">
      <h2 className="boughtproducts__title">Bought products</h2>
      <div className="boughtproducts__box">
        {boughtProducts.map((product) => (
          <BoughtProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default BoughtProducts;
