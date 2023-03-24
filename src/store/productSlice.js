import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { productsInfo } from "../data/productsInfo";

const initState = productsInfo.map((product) => {
  return {
    title: product.title,
    price: product.price,
    description: product.description,
    quantity: product.quantity,
    id: uuidv4(),
  };
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [...initState],
    boughtProducts: [],
  },
  reducers: {
    // addProduct(state, action) {
    //   state.products.push({
    //     title: action.payload.name,
    //     price: action.payload.price,
    //     description: action.payload.description,
    //     quantity: action.payload.quantity,
    //     id: uuidv4(),
    //   });
    // },

    buyProduct(state, action) {
      const product = state.products.find((product) => product.id === action.payload.id);
      if (product.quantity <= 0) {
        console.log("Товар закончился");
        alert("Товар закончился");
      } else {
        product.quantity = product.quantity - 1;
      }
    },
    //*-----------------------------------
    boughtProduct(state, action) {
      const product = state.products.find((product) => product.id === action.payload.id);
      state.boughtProducts.push({ title: product.title, quantity: product.quantity });
      //!add element
    },
    //*-----------------------------------
  },
});
export const { addProduct, buyProduct, boughtProduct } = productSlice.actions;
export default productSlice.reducer;
