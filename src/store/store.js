import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cashReducer from "./cashSlice";
import moneyReducer from "./moneySlice";
// import modalReducer from "./modalSlice";
// import singleListReducer from "./singleListSlice";

export default configureStore({
  reducer: {
    products: productReducer,
    cash: cashReducer,
    money: moneyReducer,
  },
});
