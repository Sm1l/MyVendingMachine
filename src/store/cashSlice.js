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
    changeCash(state, action) {
      state.cash = action.payload.tail;
    },
    // clearCash(state) {
    //   state.cash = 0;
    // },
  },
});
export const { addCash, spendCash, changeCash, clearCash } = cashSlice.actions;
export default cashSlice.reducer;
