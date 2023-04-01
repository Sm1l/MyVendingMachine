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
    clearCash(state, action) {
      state.cash = action.payload.tail;
    },
  },
});
export const { addCash, spendCash, clearCash } = cashSlice.actions;
export default cashSlice.reducer;
