import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
  name: "cash",
  initialState: {
    cash: 0,
    enoughCash: false,
  },
  reducers: {
    addCash(state, action) {
      // console.log(action.payload.number);
      state.cash = state.cash + action.payload.price;
    },
    spendCash(state, action) {
      if (state.cash < action.payload.price) {
        state.enoughCash = false;
        console.log("У вас недостаточно денег");
        alert("У вас недостаточно денег");
      } else {
        state.enoughCash = true;
        state.cash = state.cash - action.payload.price;
      }
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
