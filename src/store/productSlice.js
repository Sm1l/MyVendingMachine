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
    buyProduct(state, action) {
      const product = state.products.find((product) => product.id === action.payload.id);
      if (product.quantity <= 0) {
        console.log("Товар закончился");
        alert("Товар закончился");
      } else {
        product.quantity = product.quantity - 1;
      }
    },
    boughtProduct(state, action) {
      const product = state.products.find((item) => item.id === action.payload.id);
      const bPr = state.boughtProducts.find((item) => item.title === product.title);
      if (bPr) {
        bPr.quantity = bPr.quantity + 1;
      } else {
        state.boughtProducts.push({ title: product.title, quantity: 1, id: uuidv4() });
      }
    },
  },
});
export const { addProduct, buyProduct, boughtProduct } = productSlice.actions;
export default productSlice.reducer;
