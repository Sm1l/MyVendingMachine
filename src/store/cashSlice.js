import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
  name: "cash",
  initialState: {
    cash: 0,
  },
  reducers: {
    addCash(state, action) {
      state.cash = state.cash + action.payload.price;
    },
    spendCash(state, action) {
      state.cash = state.cash - action.payload.price;
    },
  },
});
export const { addCash, spendCash } = cashSlice.actions;
export default cashSlice.reducer;
