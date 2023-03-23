import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
  name: "cash",
  initialState: {
    cash: 0,
  },
  reducers: {
    addCash(state, action) {
      // console.log(action.payload.number);
      state.cash = state.cash + action.payload.price;
    },
    spendCash(state, action) {
      state.cash = state.cash - action.payload.price;
    },
    //  buyProduct(state, action) {
    //    console.log(action.payload.id);
    //    const product = state.products.find((product) => product.id === action.payload.id);
    //    if (product.quantity <= 0) {
    //      console.log("Товар закончился");
    //    } else {
    //      product.quantity = product.quantity - 1;
    //    }
    //  },
  },
});
export const { addCash, spendCash } = cashSlice.actions;
export default cashSlice.reducer;
