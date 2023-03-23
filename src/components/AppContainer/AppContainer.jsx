import React from "react";
import ProductsContainer from "components/ProductsContainer";
import ControlPanel from "components/ControlPanel";

import "./appContainer.scss";

const AppContainer = () => {
  return (
    <div className="appContainer">
      <h1 className="appContainer__title">My Vending Machine</h1>
      <div className="appContainer__box">
        <ProductsContainer />
        <ControlPanel />
      </div>
    </div>
  );
};

export default AppContainer;
