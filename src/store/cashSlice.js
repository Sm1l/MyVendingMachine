import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
  name: "cash",
  initialState: {
    cash: 0,
    enoughCash: false,
  },
  reducers: {
    addCash(state, action) {
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
  },
});
export const { addCash, spendCash } = cashSlice.actions;
export default cashSlice.reducer;
