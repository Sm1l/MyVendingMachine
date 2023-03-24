import React from "react";
import ProductsContainer from "components/ProductsContainer";
import ControlPanel from "components/ControlPanel";

import "./appcontainer.scss";

const AppContainer = () => {
  return (
    <div className="appcontainer">
      <h1 className="appcontainer__title">My Vending Machine</h1>
      <div className="appcontainer__box">
        <ProductsContainer />
        <ControlPanel />
      </div>
    </div>
  );
};

export default AppContainer;
